import { Button, Popconfirm, Modal, Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { PageContainer } from '@ant-design/pro-layout';
import {
  DeleteOutlined,
  HistoryOutlined,
  LockOutlined,
  ShoppingCartOutlined,
  UnlockOutlined,
} from '@ant-design/icons';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useState, useRef } from 'react';
import { loadModels, modifyModel, delModel } from '@/services/users';
import { loadUserScoreLogs } from '@/services/scoreLogs';
import { loadCartsDataByUser } from '@/services/carts';
import { resetImgUrl, formatTime } from '@/utils/utils';

function Index() {
  const [cartModalVisible, setCartModalVisible] = useState<boolean>(false);
  const [scoreModalVisible, setScoreModalVisible] = useState<boolean>(false);
  const [userScoreLogs, setUserScoreLogs] = useState<IScoreLog.ScoreLog[]>([]);
  const [userCarts, setUserCarts] = useState<ICarts.Cart[]>([]);
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<IUser.User>[] = [
    {
      title: '序号',
      align: 'center',
      hideInSearch: true,
      render: (r, d, i) => <>{i + 1}</>,
    },
    {
      title: '用户名',
      align: 'center',
      dataIndex: 'userName',
    },
    {
      title: '昵称',
      align: 'center',
      hideInSearch: true,
      dataIndex: 'nickName',
    },
    {
      title: '头像',
      align: 'center',
      hideInSearch: true,
      render: (r, d) => <img src={resetImgUrl(d.avatar as string)} style={{ width: '80px' }} />,
    },
    {
      title: '性别',
      align: 'center',
      dataIndex: 'gender',
      hideInSearch: true,
    },
    {
      title: '地址',
      align: 'center',
      dataIndex: 'address',
      hideInSearch: true,
    },
    {
      title: '积分',
      align: 'center',
      dataIndex: 'score',
      hideInSearch: true,
    },
    {
      title: '操作',
      align: 'center',
      hideInSearch: true,
      render(r, d) {
        return (
          <>
            <Button
              onClick={async () => {
                // const detail: IUser.User = await modelDetail(d.id);
                // setModalVisible(true);
                // setCoverImage(detail.avatar as string);
                // // const v = { ...detail };
                // setCurrentId(detail.id as number);
                // form.setFieldsValue(detail);
                await modifyModel(d.id as number, {
                  isLocked: d.isLocked === 0 ? 1 : 0,
                });
                // 重新加载数据
                if (actionRef.current) {
                  actionRef.current.reload();
                }
              }}
              type="primary"
              size="small"
              title={d.isLocked === 0 ? '锁定用户' : '解锁用户'}
              // style={{ marginRight: '0.5rem' }}
              icon={d.isLocked === 0 ? <LockOutlined /> : <UnlockOutlined />}
            ></Button>
            <span style={{ width: '2px', display: 'inline-block', height: '2px' }} />
            <Popconfirm
              title="是否确认删除"
              onConfirm={async () => {
                await delModel(d.id);
                // 重新加载数据
                if (actionRef.current) {
                  actionRef.current.reload();
                }
              }}
            >
              <Button
                title="删除用户"
                type="primary"
                danger
                size="small"
                icon={<DeleteOutlined />}
              ></Button>
            </Popconfirm>
            <span style={{ width: '2px', display: 'inline-block', height: '2px' }} />
            <Button
              title="查看购物车"
              size="small"
              icon={<ShoppingCartOutlined />}
              onClick={async () => {
                const carts = await loadCartsDataByUser(d.id as number);
                console.log(carts);
                setUserCarts(carts.data);
                setCartModalVisible(true);
              }}
            />
            <span style={{ width: '2px', display: 'inline-block', height: '2px' }} />
            <Button
              title="用户积分"
              size="small"
              icon={<HistoryOutlined />}
              onClick={async () => {
                const logs = await loadUserScoreLogs(d.id as number);
                setUserScoreLogs(logs.data);
                setScoreModalVisible(true);
              }}
            />
          </>
        );
      },
    },
  ];

  const columnsScore: ColumnsType<IScoreLog.ScoreLog> = [
    {
      title: '序号',
      align: 'center',
      render: (r, d, i) => <>{i + 1}</>,
    },
    {
      title: '备注',
      align: 'center',
      dataIndex: 'remarks',
    },
    {
      title: '时间',
      align: 'center',
      dataIndex: 'createdAt',
      render(r, d) {
        return <>{formatTime(d.createdAt)}</>;
      },
    },
  ];

  const columnsCarts: ColumnsType<ICarts.Cart> = [
    {
      title: '序号',
      align: 'center',
      render: (r, d, i) => <>{i + 1}</>,
    },
    {
      title: '名字',
      align: 'center',
      render(r, d) {
        return <>{d.product.name}</>;
      },
    },
    {
      title: '价格',
      align: 'center',
      render(r, d) {
        return <>{d.product.price}</>;
      },
    },
    {
      title: '数量',
      align: 'center',
      render(r, d) {
        return <>{d.amount}</>;
      },
    },
    // {
    //   title: '操作',
    //   align: 'center',
    //   render(r, d) {
    //     return <Button icon={<DeleteOutlined/>} danger size="small" onClick={()=>{
    //       await
    //     }}/>
    //   },
    // }
  ];

  return (
    <PageContainer>
      <ProTable
        headerTitle="用户信息"
        actionRef={actionRef}
        rowKey="id"
        columns={columns}
        pagination={{
          showSizeChanger: false,
          pageSize: 10,
        }}
        request={loadModels}
        toolBarRender={() => []}
      ></ProTable>
      <Modal
        title="购物车"
        width="800px"
        visible={cartModalVisible}
        footer={null}
        onCancel={() => setCartModalVisible(false)}
      >
        <Table dataSource={userCarts} columns={columnsCarts} pagination={false} rowKey="id" />
      </Modal>
      <Modal
        title="用户积分"
        width="800px"
        visible={scoreModalVisible}
        footer={null}
        onCancel={() => setScoreModalVisible(false)}
      >
        <Table dataSource={userScoreLogs} columns={columnsScore} pagination={false} rowKey="id" />
      </Modal>
    </PageContainer>
  );
}

export default Index;
