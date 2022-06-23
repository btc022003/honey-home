declare module IActivityLog {
  export interface User {
    createdAt?: any;
    updatedAt?: any;
    id?: number;
    userName?: string;
    password?: string;
    nickName?: string;
    gender?: string;
    avatar?: string;
    address?: string;
    area?: string;
    isLocked?: number;
    score?: number;
    age?: number;
    birthday?: string;
  }

  export interface ActivityLog {
    createdAt?: any;
    updatedAt?: any;
    id?: number;
    name?: string;
    remarks?: string;
    activity?: any;
    user?: User;
  }

  export interface ActivityLogData {
    code?: number;
    total?: number;
    pages?: number;
    data?: ActivityLog[];
  }
}
