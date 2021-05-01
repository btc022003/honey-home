import { Button, Popconfirm, Form, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { PlusOutlined } from '@ant-design/icons';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import ProTable from '@ant-design/pro-table';
import type { ProSchemaValueEnumObj } from '@ant-design/pro-utils';
import { loadProducts, addProduct, modifyProduct, delProduct } from '@/services/products';
import { allCategories } from '@/services/productCategories';
import { useState, useRef, useEffect } from 'react';
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
    allCategories().then((res) => {
      // setCategories(res.data);
      const obj: ProSchemaValueEnumObj = {
        '': {
          text: '全部',
        },
      };
      res.data.forEach((item) => {
        // obj[] = item.
        obj[item.id] = {
          text: item.name,
        };
      });
      setCategories(obj);
    });
  }, []);
  const columns: ProColumns<IProduct.Product>[] = [
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
      title: '分类',
      align: 'center',
      // hideInSearch: true,
      dataIndex: 'category',
      render(r, d) {
        return <p>{d.category?.name}</p>;
      },
      filters: true,
      onFilter: true,
      valueType: 'select',
      // 枚举每一个选项
      valueEnum: categories,
      // valueEnum: {
      //   all: { text: '全部', status: 'Default' },
      //   open: {
      //     text: '未解决',
      //     status: 'Error',
      //   },
      //   closed: {
      //     text: '已解决',
      //     status: 'Success',
      //     disabled: true,
      //   },
      //   processing: {
      //     text: '解决中',
      //     status: 'Processing',
      //   },
      // },
      // renderFormItem: (item, { type, defaultRender, ...rest }, form) => {
      //   return (
      //     <ProFormSelect
      //       valueEnum={{
      //         china: 'China',
      //         usa: 'U.S.A',
      //       }}
      //       placeholder="Please select a country"
      //     ></ProFormSelect>
      //   );
      // },
    },
    {
      title: '主图',
      align: 'center',
      hideInSearch: true,
      render: (r, d) => <img src={resetImgUrl(d.coverImage)} style={{ width: '80px' }} />,
    },
    {
      title: '价格',
      align: 'center',
      hideInSearch: true,
      dataIndex: 'price',
    },
    {
      title: '库存',
      align: 'center',
      hideInSearch: true,
      dataIndex: 'amount',
    },
    {
      title: '操作',
      align: 'center',
      hideInSearch: true,
      render(r, d) {
        return (
          <>
            <Button
              onClick={() => {
                setModalVisible(true);
                setCoverImage(d.coverImage);
                form.setFieldsValue(d);
                setCurrentId(d.id);
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
                await delProduct(d.id);
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
        headerTitle="商品信息"
        actionRef={actionRef}
        rowKey="id"
        columns={columns}
        pagination={{
          showSizeChanger: false,
          pageSize: 10,
        }}
        request={loadProducts}
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
        title="商品编辑"
        width="800px"
        initialValues={{
          name: 'Tom',
        }}
        form={form}
        visible={createModalVisible}
        onVisibleChange={setModalVisible}
        onFinish={async (value) => {
          // console.log(value);
          const saveData = { ...value };
          if (coverImage) {
            saveData.coverImage = coverImage;
          }
          if (currentId > 0) {
            // 修改
            await modifyProduct(currentId, saveData);
            message.success('修改成功');
            setModalVisible(false);
          } else {
            // 新增
            await addProduct(saveData);
            message.success('新增成功');
            setModalVisible(false);
          }
          if (actionRef.current) {
            actionRef.current.reload();
          }
          // const success = await handleAdd(value as API.RuleListItem);
          // if (success) {
          //   handleModalVisible(false);
          //   if (actionRef.current) {
          //     actionRef.current.reload();
          //   }
          // }
        }}
      >
        <ProFormText
          label="名字"
          rules={[
            {
              required: true,
              message: '商品名字必填',
            },
          ]}
          placeholder="请输入商品名字"
          width="md"
          name="name"
        />
        <ProFormTextArea label="简介" placeholder="请输入商品简介" width="md" name="desc" />
        <UploadImage coverImage={coverImage} setCoverImage={setCoverImage} />
      </ModalForm>
    </PageContainer>
  );
}

export default Index;
