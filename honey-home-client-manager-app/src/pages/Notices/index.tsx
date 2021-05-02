import { Button, Popconfirm, Form, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { PlusOutlined } from '@ant-design/icons';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProForm, { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import ProTable from '@ant-design/pro-table';
import { useState, useRef } from 'react';
import BraftEditor from 'braft-editor';
import type { EditorState } from 'braft-editor';
import RichTextEditor from '@/components/RichTextEditor';
import { loadModels, addModel, modifyModel, delModel, modelDetail } from '@/services/notices';
import UploadImage from '@/components/UploadImage';
import { resetImgUrl } from '@/utils/utils';

function Index() {
  const [createModalVisible, setModalVisible] = useState<boolean>(false);
  const [coverImage, setCoverImage] = useState<string>('');
  const [currentId, setCurrentId] = useState<number>(0);
  const actionRef = useRef<ActionType>();
  const [form] = Form.useForm();
  const [editorState, setEditorState] = useState<EditorState>({}); // 富文本编辑器部分

  const columns: ProColumns<INotice.Notice>[] = [
    {
      title: '序号',
      align: 'center',
      hideInSearch: true,
      render: (r, d, i) => <>{i + 1}</>,
    },
    {
      title: '名字',
      align: 'center',

      dataIndex: 'name',
    },
    {
      title: '主图',
      align: 'center',
      hideInSearch: true,
      render: (r, d) => <img src={resetImgUrl(d.coverImage as string)} style={{ width: '80px' }} />,
    },
    {
      title: '描述',
      align: 'center',
      dataIndex: 'desc',
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
                const detail: INotice.Notice = await modelDetail(d.id);
                setModalVisible(true);
                setEditorState(BraftEditor.createEditorState(detail.content));
                setCoverImage(detail.coverImage as string);
                // const v = { ...detail };
                setCurrentId(detail.id as number);
                form.setFieldsValue(detail);
              }}
              type="primary"
              size="small"
              // style={{ marginRight: '0.5rem' }}
            >
              修改
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

  return (
    <PageContainer>
      <ProTable
        headerTitle="公告"
        actionRef={actionRef}
        rowKey="id"
        columns={columns}
        pagination={{
          showSizeChanger: false,
          pageSize: 10,
        }}
        request={loadModels}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setModalVisible(true);
              setEditorState(BraftEditor.createEditorState(''));
              setCurrentId(0);
              setCoverImage('');
              form.setFieldsValue({
                name: '',
                desc: '',
              });
            }}
          >
            <PlusOutlined />
            新建
          </Button>,
        ]}
      ></ProTable>
      <ModalForm
        title="商品编辑"
        width="800px"
        initialValues={{
          name: 'Tom',
        }}
        form={form}
        visible={createModalVisible}
        onVisibleChange={setModalVisible}
        onFinish={async (value: { name: string }) => {
          // console.log(value);
          const saveData: INotice.Notice = { ...value, content: editorState.toHTML() };
          if (coverImage) {
            saveData.coverImage = coverImage;
          }
          if (currentId > 0) {
            // 修改
            await modifyModel(currentId, saveData);
            message.success('修改成功');
            setModalVisible(false);
          } else {
            // 新增
            await addModel(saveData);
            message.success('新增成功');
            setModalVisible(false);
          }
          if (actionRef.current) {
            actionRef.current.reload();
          }
        }}
      >
        <ProFormText
          label="标题"
          rules={[
            {
              required: true,
              message: '公告标题必填',
            },
          ]}
          placeholder="请输入公告标题"
          width="md"
          name="name"
        />
        <ProFormTextArea label="简介" placeholder="请输入公告简介" width="md" name="desc" />
        <UploadImage coverImage={coverImage} setCoverImage={setCoverImage} />
        <ProForm.Item label="详情">
          <RichTextEditor editorState={editorState} setEditorState={setEditorState} />
        </ProForm.Item>
      </ModalForm>
    </PageContainer>
  );
}

export default Index;
