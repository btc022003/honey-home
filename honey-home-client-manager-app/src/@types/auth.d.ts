declare module IAuth {
  export interface UserInfo {
    createdAt: number;
    updatedAt: number;
    id: number;
    userName: string;
    password: string;
    nickName: string;
    gender: string;
    avatar: string;
  }
}
