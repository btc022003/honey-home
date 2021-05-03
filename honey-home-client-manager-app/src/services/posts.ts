import { request } from 'umi';

/**
 * 加载100条分类数据时
 * @returns
 */
export function allCategories() {
  return request<IForum.ForumData>('/api/v1/admin/post?per=100');
}

export const loadModels = async (
  // 第一个参数 params 查询表单和 params 参数的结合
  // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
  params: IPost.Post & {
    pageSize: number;
    current: number;
  },
) => {
  const msg = await request<IPost.PostData>('/api/v1/admin/post', {
    method: 'get',
    params: {
      page: params.current,
      name: params.name,
      forum: (params.forum as number) > 0 ? params.forum : '',
    },
  });
  // console.log(msg)
  return new Promise<any>((reslove) => {
    reslove({
      data: msg.data,
      // success 请返回 true，
      // 不然 table 会停止解析数据，即使有数据
      success: true,
      // 不传会使用 data 的长度，如果是分页一定要传
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
  return request<IPost.Post>(`/api/v1/admin/post/${id}`, {
    method: 'GET',
  });
};

/**
 * 新增
 * @param data
 * @returns
 */
export const addModel = (data: IPost.Post) => {
  return request('/api/v1/admin/post', {
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
export const modifyModel = (id: number, data: IPost.Post) => {
  return request(`/api/v1/admin/post/${id}`, {
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
  return request(`/api/v1/admin/post/${id}`, {
    method: 'DELETE',
  });
};

/**
 * 加载评论数据
 * @param id 帖子id
 * @returns
 */
export const loadComments = (id: number | undefined) => {
  return request<IComment.Comment[]>(`/api/v1/admin/comment`, {
    params: {
      where: {
        post: id,
      },
    },
  });
};
