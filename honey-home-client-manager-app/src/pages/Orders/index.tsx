import { Button, Popconfirm, Modal, Table } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useState, useRef } from 'react';
import { loadModels, modifyModel, delModel, modelOrderDetail } from '@/services/orders';
import { resetImgUrl } from '@/utils/utils';
import type { ColumnsType } from 'antd/lib/table';

function Index() {
  const [createModalVisible, setModalVisible] = useState<boolean>(false);
  const [orderDetail, setOrderDetail] = useState<IOrder.OrderDetail[]>([]);
  // const [currentId, setCurrentId] = useState<number>(0);
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<IOrder.Order>[] = [
    {
      title: '序号',
      align: 'center',
      hideInSearch: true,
      render: (r, d, i) => <>{i + 1}</>,
    },
    {
      title: '用户',
      align: 'center',
      dataIndex: 'user',
      render(r, d) {
        return <>{d.user?.userName}</>;
      },
    },
    {
      title: '价格',
      align: 'center',
      hideInSearch: true,
      dataIndex: 'price',
    },
    {
      title: '地址',
      align: 'center',
      dataIndex: 'area',
      hideInSearch: true,
    },
    {
      title: '详细地址',
      align: 'center',
      dataIndex: 'address',
      hideInSearch: true,
    },
    {
      title: '订单状态',
      align: 'center',
      render(r, d) {
        return d.orderStatus === 0 ? '未完成' : '已完成';
      },
      filters: true,
      onFilter: true,
      dataIndex: 'orderStatus',
      valueType: 'select',
      // 枚举每一个选项
      valueEnum: {
        0: {
          text: '全部',
        },
        11: {
          text: '已完成',
        },
        10: {
          text: '未完成',
        },
      },
    },
    {
      title: '支付状态',
      align: 'center',
      dataIndex: 'payStatus',
      render(r, d) {
        return d.payStatus === 0 ? '未支付' : '已支付';
      },
      filters: true,
      onFilter: true,
      valueType: 'select',
      // 枚举每一个选项
      valueEnum: {
        0: {
          text: '全部',
        },
        11: {
          text: '已支付',
        },
        10: {
          text: '未支付',
        },
      },
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
                const detail = await modelOrderDetail(d.id);
                setOrderDetail(detail);
                setModalVisible(true);
                // setCurrentId(detail.id as number);
              }}
              type="primary"
              size="small"
              // style={{ marginRight: '0.5rem' }}
            >
              详情
            </Button>
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
              <Button type="primary" danger size="small">
                删除
              </Button>
            </Popconfirm>
            <span style={{ width: '2px', display: 'inline-block', height: '2px' }} />
            <Button
              size="small"
              onClick={async () => {
                await modifyModel(d.id as number, { payStatus: 1 });
                if (actionRef.current) {
                  actionRef.current.reload();
                }
              }}
            >
              支付
            </Button>
            <span style={{ width: '2px', display: 'inline-block', height: '2px' }} />
            <Button
              size="small"
              type="primary"
              ghost
              onClick={async () => {
                await modifyModel(d.id as number, { orderStatus: 1 });
                if (actionRef.current) {
                  actionRef.current.reload();
                }
              }}
            >
              完成
            </Button>
          </>
        );
      },
    },
  ];

  const odColumns: ColumnsType<IOrder.OrderDetail> = [
    {
      title: '序号',
      align: 'center',
      render: (r, d, i) => <>{i + 1}</>,
    },
    {
      title: '商品',
      align: 'center',
      render: (r, d) => <>{d.product?.name}</>,
    },
    {
      title: '图片',
      align: 'center',
      render: (r, d) => (
        <img style={{ width: '80px' }} src={resetImgUrl(d.product?.coverImage as string)} />
      ),
    },
    {
      title: '数量',
      align: 'center',
      dataIndex: 'amount',
    },
  ];

  return (
    <PageContainer>
      <ProTable
        headerTitle="订单列表"
        actionRef={actionRef}
        rowKey="id"
        columns={columns}
        pagination={{
          showSizeChanger: false,
          pageSize: 10,
        }}
        request={loadModels}
      ></ProTable>
      <Modal
        width={800}
        title="订单详情"
        visible={createModalVisible}
        onCancel={() => setModalVisible(false)}
      >
        <Table dataSource={orderDetail} columns={odColumns} pagination={false} />
      </Modal>
    </PageContainer>
  );
}

export default Index;
