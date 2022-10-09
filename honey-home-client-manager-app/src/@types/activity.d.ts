declare module IActivity {
  export interface Category {
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    name?: string;
    coverImage?: string;
    desc?: string;
    parent?: number;
  }

  export interface Activity {
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    name?: string;
    coverImage?: string;
    desc?: string;
    content?: string;
    category?: Category;
  }

  export interface ActivityData {
    code?: number;
    total?: number;
    pages?: number;
    data?: Activity[];
  }
}
