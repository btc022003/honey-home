import { request } from 'umi';

/**
 * 获取用户的购物车信息
 * @param userId 用户id
 * @returns
 */
export function loadCartsDataByUser(userId: number) {
  return request(`/api/v1/admin/cart/info`, {
    params: {
      user: userId,
    },
  });
}

/**
 * 根据购物车id删除购物车信息
 * @param id
 * @returns
 */
export function deleteUserCartData(id: number) {
  return request<{ id: number; data: ICarts.Cart[] }>(`/api/v1/admin/cart/${id}`, {
    method: 'DELETE',
  });
}
