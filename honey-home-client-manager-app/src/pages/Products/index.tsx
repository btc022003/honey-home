
import { Button, Popconfirm } from 'antd'
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table'
import { loadProducts } from '@/services/products'

function Index() {
  const columns: ProColumns<IProduct.Product>[] = [{
    title: '序号',
    align: 'center',
    hideInSearch: true,
    render:(r,d,i)=><>{i+1}</>
  },{
    title: '名字',
    align: 'center',

    dataIndex: 'name'
  },{
    title:'主图',
    align: 'center',
    hideInSearch: true,
    render:(r,d)=><img src={d.coverImage} style={{width: '80px'}}/>
  },{
    title: '价格',
    align: 'center',
    hideInSearch: true,
    dataIndex: 'price'
  }, {
    title: '库存',
    align: 'center',
    hideInSearch: true,
    dataIndex: 'amount'
  },{
    title: '操作',
    align: 'center',
    hideInSearch: true,
    render(r,d){
      return <>
      <Button type="primary" size="small" style={{marginRight: '0.5rem'}}>修改</Button>
      <Popconfirm title="是否确认删除">
        <Button type="primary" danger size="small">删除</Button>
      </Popconfirm>
      </>
    }
  }]
  return (
    <PageContainer>
      <ProTable headerTitle='商品信息'
      rowKey="id" columns={columns}
      pagination={{
        showSizeChanger: false,
        pageSize: 10
      }}
      request={loadProducts}></ProTable>
    </PageContainer>
  )
}

export default Index
