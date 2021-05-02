declare module INotice {
  export interface Notice {
    createdAt?: number;
    updatedAt?: number;
    id?: number | undefined;
    name?: string;
    coverImage?: string;
    desc?: string;
    content?: string;
    views?: number;
  }

  export interface NoticeData {
    total: number;
    page: number;
    pages: number;
    data: Notice[];
  }
}
