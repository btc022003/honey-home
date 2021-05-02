declare module IScoreLog {
  export interface User {
    createdAt: any;
    updatedAt: any;
    id: number;
    userName: string;
    password: string;
    nickName: string;
    gender: string;
    avatar: string;
    address: string;
    area: string;
    isLocked: number;
    score: number;
    age: number;
    birthday: string;
  }

  export interface ScoreLog {
    createdAt: any;
    updatedAt: any;
    id: number;
    remarks: string;
    score: number;
    user: User;
  }
}
