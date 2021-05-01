declare module IProductCategory {
  export interface ProductCategory {
    createdAt: any;
    updatedAt: any;
    id: number;
    name: string;
    coverImage: string;
    desc: string;
    parent: number;
  }

  export interface ProductCategoryData {
    code: number;
    total: number;
    pages: number;
    data: ProductCategory[];
  }
}
