declare module IBannerCategory {
  export interface BannerCategory {
    createdAt?: number;
    updatedAt?: number;
    id?: number | undefined;
    name?: string;
    coverImage?: string;
    desc?: string;
  }

  export interface BannerCategoryData {
    total: number;
    page: number;
    pages: number;
    data: BannerCategory[];
  }
}
