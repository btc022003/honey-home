declare module ICarts {
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

  export interface Product {
    createdAt?: any;
    updatedAt?: any;
    id?: number;
    name: string;
    coverImage?: string;
    desc?: string;
    views?: number;
    price?: number | undefined;
    content?: string;
    onSale?: number;
    amount?: number | undefined;
    category?: number | unknown;
  }

  export interface Cart {
    createdAt: number;
    updatedAt: number;
    id: number;
    price: number;
    amount: number;
    user: User;
    product: Product;
  }
}
