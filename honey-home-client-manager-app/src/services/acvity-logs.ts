import { request } from 'umi';

/**
 * 获取活动报名记录
 * @param activity
 * @returns
 */
export const loadAllLogs = (activity: number) => {
  return request<IActivityLog.ActivityLogData>('/api/v1/admin/activitylog', {
    params: {
      activity,
      per: 1000,
    },
  });
};
