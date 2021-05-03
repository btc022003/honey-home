declare module IForum {
  export interface Forum {
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    name?: string;
    coverImage?: string;
    desc?: string;
    parent?: number;
  }

  export interface ForumData {
    code: number;
    total: number;
    pages: number;
    data: Forum[];
  }
}
