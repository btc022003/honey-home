declare module IArticleCategory {
  export interface ArticleCategory {
    createdAt?: any;
    updatedAt?: any;
    id?: number;
    name?: string;
    coverImage?: string;
    desc?: string;
    parent?: number;
  }

  export interface ArticleCategoryData {
    code: number;
    total: number;
    pages: number;
    data: ArticleCategory[];
  }
}
