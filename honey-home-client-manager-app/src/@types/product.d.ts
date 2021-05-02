declare module IProduct {
  export interface Category {
    createdAt: any;
    updatedAt: any;
    id: number;
    name: string;
    coverImage: string;
    desc: string;
    parent: number;
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
    category?: Category | unknown;
  }

  export interface ProductData {
    code: number;
    total: number;
    pages: number;
    data: Product[];
  }
}
