import { request } from 'umi';

/**
 * 获取指定用户的积分记录
 * @param id
 * @returns
 */
export function loadUserScoreLogs(id: number) {
  return request<{ code: number } & { data: IScoreLog.ScoreLog[] }>('/api/v1/admin/scorelog/info', {
    params: {
      user: id,
    },
  });
}
