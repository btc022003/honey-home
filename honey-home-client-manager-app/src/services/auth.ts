import { request } from 'umi';

/**
 * 用户登录
 * @param data
 * @returns
 */
export async function login(data: {
  userName:string;
  password: string;
}) {
  return request('/api/v1/auth/manager_login', {
    method: 'post',
    data
  });
}
/**
 * 获取当前用户
 */
export async function currentUser() {
  return request('/api/v1/auth/manager_info')
}
