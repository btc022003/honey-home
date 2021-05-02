import { request } from 'umi';

export const loadModels = async (
  // 第一个参数 params 查询表单和 params 参数的结合
  // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
  params: IBanner.Banner & {
    pageSize: number;
    current: number;
  },
) => {
  const msg = await request<IBanner.BannerData>('/api/v1/admin/banner', {
    method: 'get',
    params: {
      page: params.current,
      name: params.name,
      category: (params.category as number) > 0 ? params.category : '',
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
  return request<IBanner.Banner>(`/api/v1/admin/banner/${id}`, {
    method: 'GET',
  });
};

/**
 * 新增
 * @param data
 * @returns
 */
export const addModel = (data: IBanner.Banner) => {
  return request('/api/v1/admin/banner', {
    method: 'POST',
    data,
  });
};

/**
 * 修改
 * @param id
 * @param data
 * @returns
 */
export const modifyModel = (id: number, data: IBanner.Banner) => {
  return request(`/api/v1/admin/banner/${id}`, {
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
  return request(`/api/v1/admin/banner/${id}`, {
    method: 'DELETE',
  });
};
