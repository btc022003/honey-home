import { Button, Popconfirm, Form, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { PlusOutlined } from '@ant-design/icons';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { ModalForm, ProFormText, ProFormTextArea, ProFormSelect } from '@ant-design/pro-form';
import type { ProSchemaValueEnumObj } from '@ant-design/pro-utils';
import ProTable from '@ant-design/pro-table';
import { useState, useRef, useEffect } from 'react';
import { loadModels, addModel, modifyModel, delModel, modelDetail } from '@/services/banners';
import { allCategories } from '@/services/bannerCategories';
import UploadImage from '@/components/UploadImage';
import { resetImgUrl } from '@/utils/utils';

function Index() {
  const [createModalVisible, setModalVisible] = useState<boolean>(false);
  const [coverImage, setCoverImage] = useState<string>('');
  const [currentId, setCurrentId] = useState<number>(0);
  const actionRef = useRef<ActionType>();
  const [form] = Form.useForm();
  const [categories, setCategories] = useState<ProSchemaValueEnumObj>({});
  useEffect(() => {
    allCategories().then((res: any) => {
      // setCategories(res.data);
      const obj: ProSchemaValueEnumObj = {};
      obj[0] = {
        text: '全部',
      };
      res.data.forEach((item: IBannerCategory.BannerCategory) => {
        // obj[] = item.
        obj[item.id as number] = {
          text: item.name,
        };
      });

      setCategories(obj);
    });
  }, []);

  const columns: ProColumns<IBanner.Banner>[] = [
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
      title: '分类',
      align: 'center',
      // hideInSearch: true,
      dataIndex: 'category',
      render(r, d) {
        return <p>{(d.category as IBanner.Category)?.name}</p>;
      },
      filters: true,
      onFilter: true,
      valueType: 'select',
      // 枚举每一个选项
      valueEnum: categories,
    },
    {
      title: '描述',
      align: 'center',
      dataIndex: 'desc',
      hideInSearch: true,
    },
    {
      title: '链接',
      align: 'center',
      dataIndex: 'link',
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
                const detail: IBanner.Banner = await modelDetail(d.id);
                setModalVisible(true);
                setCoverImage(detail.coverImage as string);
                // const v = { ...detail };
                setCurrentId(detail.id as number);
                const v = { ...detail };
                delete v.category;
                // setCategories({...categories})
                form.setFieldsValue({ ...v, category: `${(d.category as IBanner.Category).id}` });
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
        headerTitle="轮播图"
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
        title="轮播图编辑"
        width="800px"
        initialValues={{
          name: 'Tom',
        }}
        form={form}
        visible={createModalVisible}
        onVisibleChange={setModalVisible}
        onFinish={async (value: { name: string }) => {
          // console.log(value);
          const saveData: IBanner.Banner = { ...value };
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
          label="名字"
          rules={[
            {
              required: true,
              message: '分类名字必填',
            },
          ]}
          placeholder="请输入分类名字"
          width="md"
          name="name"
        />
        <ProFormSelect
          name="category"
          label="分类"
          valueEnum={categories}
          rules={[{ required: true, message: '请选择商品分类' }]}
        ></ProFormSelect>
        <ProFormTextArea label="简介" placeholder="请输入简介" width="md" name="desc" />
        <UploadImage coverImage={coverImage} setCoverImage={setCoverImage} />
        <ProFormTextArea label="链接" placeholder="请输入跳转链接" width="md" name="link" />
      </ModalForm>
    </PageContainer>
  );
}

export default Index;
