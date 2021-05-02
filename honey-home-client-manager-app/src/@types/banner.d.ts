declare module IBanner {
  export interface Category {
    createdAt: any;
    updatedAt: any;
    id: number;
    name: string;
    coverImage: string;
    desc: string;
    parent: number;
  }

  export interface Banner {
    createdAt?: any;
    updatedAt?: any;
    id?: number;
    name: string;
    coverImage?: string;
    desc?: string;
    link?: string;
    url?: number;
    category?: Category | unknown;
  }

  export interface BannerData {
    code: number;
    total: number;
    pages: number;
    data: Banner[];
  }
}
