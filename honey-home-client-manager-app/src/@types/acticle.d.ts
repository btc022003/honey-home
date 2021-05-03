declare module IArticle {
  export interface Article {
    createdAt?: any;
    updatedAt?: any;
    id?: number;
    name?: string;
    coverImage?: string;
    desc?: string;
    content?: string;
    views?: number;
    category?: IArticleCategory.ArticleCategory;
  }

  export interface ArticleData {
    total: number;
    page: number;
    pages: number;
    data: Article[];
  }
}
