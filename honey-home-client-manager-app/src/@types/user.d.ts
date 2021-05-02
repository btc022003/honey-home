declare module IUser {
  export interface User {
    createdAt?: any;
    updatedAt?: any;
    id?: number | undefined;
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

  export interface UserData {
    code: number;
    total: number;
    pages: number;
    data: Banner[];
  }
}
