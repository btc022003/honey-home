declare module IComment {
  export interface Comment {
    createdAt?: any;
    updatedAt?: any;
    id?: number;
    content?: string;
    isChecked?: number;
    views?: number;
    user?: IUser.User;
    post?: IPost.Post;
  }
}
