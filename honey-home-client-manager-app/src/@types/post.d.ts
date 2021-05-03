declare module IPost {
  export interface Comment {
    createdAt: any;
    updatedAt: any;
    id: number;
    content: string;
    isChecked: number;
    views: number;
    user: number;
    post: number;
  }

  export interface Post {
    createdAt?: any;
    updatedAt?: number;
    id?: number;
    name?: string;
    coverImage?: string;
    desc?: string;
    content?: string;
    views?: number;
    isChecked?: number;
    forum?: IForum.Forum;
    user?: IUser.User;
    comments?: Comment[];
  }

  export interface PostData {
    code: number;
    total: number;
    pages: number;
    data: Post[];
  }
}
