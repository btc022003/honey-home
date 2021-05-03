import { request } from 'umi';

export const loadModels = async (
  // 第一个参数 params 查询表单和 params 参数的结合
  // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
  params: IOrder.Order & {
    pageSize: number;
    current: number;
  },
) => {
  console.log(params);
  const msg = await request<IOrder.OrderData>('/api/v1/admin/order', {
    method: 'get',
    params: {
      page: params.current,
      user: params.user,
      patStatus: params.payStatus && params.payStatus > 5 ? params.payStatus - 10 : '',
      orderStatus: params.orderStatus && params.orderStatus > 5 ? params.orderStatus - 10 : '',
    },
  });
  return new Promise<any>((reslove) => {
    reslove({
      data: msg.data,
      success: true,
      total: msg.total,
    });
  });
};

/**
 * 获取详情
 * @param id
 * @returns
 */
export const modelDetail = (id: number | undefined) => {
  return request<IOrder.Order>(`/api/v1/admin/order/${id}`, {
    method: 'GET',
  });
};

/**
 * 获取详情
 * @param id
 * @returns
 */
export const modelOrderDetail = (id: number | undefined) => {
  return request<IOrder.OrderDetail[]>(`/api/v1/admin/orderdetail`, {
    method: 'GET',
    params: {
      where: { order: id },
    },
  });
};

/**
 * 修改
 * @param id
 * @param data
 * @returns
 */
export const modifyModel = (id: number, data: IOrder.Order) => {
  return request(`/api/v1/admin/order/${id}`, {
    method: 'PUT',
    data,
  });
};

/**
 * 删除
 * @param id
 * @returns
 */
export const delModel = (id: number | undefined) => {
  return request(`/api/v1/admin/order/${id}`, {
    method: 'DELETE',
  });
};
