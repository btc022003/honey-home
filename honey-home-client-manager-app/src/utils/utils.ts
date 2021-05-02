/* eslint no-useless-escape:0 import/prefer-default-export:0 */
import moment from 'moment';

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

export const isAntDesignPro = (): boolean => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }
  return window.location.hostname === 'preview.pro.ant.design';
};

// 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
export const isAntDesignProOrDev = (): boolean => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'development') {
    return true;
  }
  return isAntDesignPro();
};

/**
 * 设置token
 * @param token
 */
export function setToken(token: string) {
  sessionStorage.setItem('token', token);
}

/**
 * 获取token
 * @returns
 */
export function getToken(): string | null {
  return sessionStorage.getItem('token');
}

/**
 * 清除token
 */
export function removeToken() {
  sessionStorage.removeItem('token');
}

export function resetImgUrl(url: string) {
  if (url) {
    if (url.startsWith('http')) {
      return url;
    }
    return `${BASE_URL}${url}`;
  }
  return 'http://oss.penkuoer.com/uPic/ss.jpeg';
}

export function formatTime(date: string) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
}
