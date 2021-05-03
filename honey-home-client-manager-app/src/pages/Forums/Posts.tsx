import { Button, Popconfirm, Modal, Table } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import type { ProSchemaValueEnumObj } from '@ant-design/pro-utils';
import ProTable from '@ant-design/pro-table';
import { useState, useRef, useEffect } from 'react';
import { loadModels, modifyModel, delModel, modelDetail, loadComments } from '@/services/posts';
import { allCategories } from '@/services/forums';
import { resetImgUrl, formatTime } from '@/utils/utils';
import type { ColumnsType } from 'antd/lib/table';

function Index() {
  const [createModalVisible, setModalVisible] = useState<boolean>(false);
  const [postDetail, setPostDetail] = useState<IPost.Post>({});
  const [comments, setComments] = useState<IComment.Comment[]>([]);
  const [categories, setCategories] = useState<ProSchemaValueEnumObj>({});
  const actionRef = useRef<ActionType>();

  useEffect(() => {
    allCategories().then((res: any) => {
      // setCategories(res.data);
      const obj: ProSchemaValueEnumObj = {};
      obj[0] = {
        text: '全部',
      };
      res.data.forEach((item: IProduct.Product) => {
        // obj[] = item.
        obj[item.id as number] = {
          text: item.name,
        };
      });

      setCategories(obj);
    });
  }, []);

  const columns: ProColumns<IPost.Post>[] = [
    {
      title: '序号',
      align: 'center',
      hideInSearch: true,
      render: (r, d, i) => <>{i + 1}</>,
    },
    {
      title: '主题',
      align: 'center',
      dataIndex: 'name',
    },
    {
      title: '板块',
      align: 'center',
      // hideInSearch: true,
      dataIndex: 'forum',
      render: (r, d) => <>{d.forum?.name}</>,
      filters: true,
      onFilter: true,
      valueType: 'select',
      // 枚举每一个选项
      valueEnum: categories,
    },
    {
      title: '发布人',
      align: 'center',
      hideInSearch: true,
      render: (r, d) => <>{d.user?.userName}</>,
    },
    {
      title: '主图',
      align: 'center',
      hideInSearch: true,
      render: (r, d) => <img src={resetImgUrl(d.coverImage as string)} style={{ width: '80px' }} />,
    },
    {
      title: '是否审核',
      align: 'center',
      hideInSearch: true,
      render: (r, d) => <>{d.isChecked === 1 ? '是' : '否'}</>,
    },
    {
      title: '描述',
      align: 'center',
      dataIndex: 'desc',
      hideInSearch: true,
    },
    {
      title: '内容',
      align: 'center',
      dataIndex: 'content',
      hideInSearch: true,
      ellipsis: true,
    },
    {
      title: '发布时间',
      align: 'center',
      hideInSearch: true,
      render: (r, d) => <>{formatTime(d.createdAt)}</>,
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
                await modifyModel(d.id as number, {
                  isChecked: d.isChecked === 0 ? 1 : 0,
                });
                if (actionRef.current) {
                  actionRef.current.reload();
                }
                // const detail: IForum.Forum = await modelDetail(d.id);
                // setModalVisible(true);
                // setCoverImage(detail.coverImage as string);
                // // const v = { ...detail };
                // setCurrentId(detail.id as number);
                // form.setFieldsValue(detail);
              }}
              type="primary"
              size="small"
              // style={{ marginRight: '0.5rem' }}
            >
              {d.isChecked === 0 ? '审核' : '取消'}
            </Button>
            <span style={{ width: '2px', display: 'inline-block', height: '2px' }} />
            <Button
              onClick={async () => {
                const detail: IPost.Post = await modelDetail(d.id);
                const commentsData = await loadComments(d.id);
                // console.log(commentsData);
                setComments(commentsData);
                // console.log(detail);
                setPostDetail(detail);
                setModalVisible(true);
                // setCoverImage(detail.coverImage as string);
                // // const v = { ...detail };
                // setCurrentId(detail.id as number);
                // form.setFieldsValue(detail);
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
          </>
        );
      },
    },
  ];

  const commentColumns: ColumnsType<IComment.Comment> = [
    {
      title: '序号',
      align: 'center',
      render: (r, d, i) => <>{i + 1}</>,
    },
    {
      title: '作者',
      align: 'center',
      render: (r, d) => <>{d.user?.userName}</>,
    },
    {
      title: '详情',
      align: 'center',
      // ellipsis: true,
      render: (r, d) => <>{d.content}</>,
    },
    {
      title: '发布时间',
      align: 'center',
      render: (r, d) => <>{formatTime(d.createdAt)}</>,
    },
  ];

  function createRichText() {
    return { __html: postDetail.content as string };
  }

  return (
    <PageContainer>
      <ProTable
        headerTitle="帖子列表"
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
        visible={createModalVisible}
        onCancel={() => setModalVisible(false)}
        title={postDetail.name}
        width={800}
        footer={false}
      >
        <h1>{postDetail.name}</h1>
        <div dangerouslySetInnerHTML={createRichText()}></div>
        <hr />
        <Table pagination={false} rowKey="id" dataSource={comments} columns={commentColumns} />
      </Modal>
    </PageContainer>
  );
}

export default Index;
