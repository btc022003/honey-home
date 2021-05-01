import { Button, Popconfirm, Form, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { PlusOutlined } from '@ant-design/icons';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProForm, {
  ModalForm,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormDigit,
} from '@ant-design/pro-form';
import ProTable from '@ant-design/pro-table';
import type { ProSchemaValueEnumObj } from '@ant-design/pro-utils';
import { useState, useRef, useEffect } from 'react';
// 引入编辑器组件
import BraftEditor from 'braft-editor';
import type { EditorState } from 'braft-editor';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import {
  loadProducts,
  addProduct,
  modifyProduct,
  delProduct,
  productDetail,
} from '@/services/products';
import { allCategories } from '@/services/productCategories';
import UploadImage from '@/components/UploadImage';
import { resetImgUrl } from '@/utils/utils';

function Index() {
  const [createModalVisible, setModalVisible] = useState<boolean>(false);
  const [coverImage, setCoverImage] = useState<string>('');
  const [currentId, setCurrentId] = useState<number>(0);
  const actionRef = useRef<ActionType>();
  const [form] = Form.useForm();
  const [categories, setCategories] = useState<ProSchemaValueEnumObj>({});
  const [editorState, setEditorState] = useState<EditorState>({}); // 富文本编辑器部分

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
      render: (r, d) => <img src={resetImgUrl(d.coverImage as string)} style={{ width: '80px' }} />,
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
              onClick={async () => {
                const detail: IProduct.Product = await productDetail(d.id);
                setModalVisible(true);
                setCoverImage(detail.coverImage as string);
                // detail.category = detail.category?.id;
                // console.log(detail);
                const v = { ...detail };
                delete v.category;
                // setCategories({...categories})
                form.setFieldsValue({ ...v, category: `${d.category?.id}` });
                setEditorState(BraftEditor.createEditorState(detail.content));
                setCurrentId(detail.id as number);
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

  // 富文本编辑器
  const handleEditorChange = (v: EditorState) => {
    setEditorState(v);
  };

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
        onFinish={async (value: { name: string }) => {
          console.log(value);
          const saveData: IProduct.Product = { ...value, content: editorState.toHTML() };
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
        <UploadImage coverImage={coverImage} setCoverImage={setCoverImage} />
        <ProFormTextArea label="简介" placeholder="请输入商品简介" width="md" name="desc" />
        <ProFormSelect
          name="category"
          label="分类"
          valueEnum={categories}
          rules={[{ required: true, message: '请选择商品分类' }]}
        ></ProFormSelect>
        <ProFormText
          label="价格"
          fieldProps={{
            prefix: '¥',
            suffix: '元',
            type: 'number',
          }}
          tooltip="请输入价格，不能小于0"
          rules={[
            {
              min: 0,
              message: '价格不能小于0',
              type: 'number',
              // 验证的时候数字进行转换
              transform(value) {
                return Number(value);
              },
            },
            // { max: 99999, message: '价格不能大于99999', type: 'number' },
          ]}
          placeholder="请输入价格"
          width="md"
          name="price"
        />
        <ProFormDigit
          label="库存"
          placeholder="请输入库存"
          width="md"
          fieldProps={{
            type: 'number',
          }}
          rules={[
            {
              min: 0,
              message: '库存不能小于0',
              type: 'number',
              // 验证的时候数字进行转换
              transform(value) {
                return Number(value);
              },
            },
          ]}
          name="amount"
        />
        <ProForm.Item label="详情">
          <BraftEditor
            style={{ border: '1px solid', borderColor: 'rgba(0, 0, 0, 0.5)' }}
            value={editorState}
            onChange={(e) => handleEditorChange(e)}
          />
        </ProForm.Item>
      </ModalForm>
    </PageContainer>
  );
}

export default Index;
