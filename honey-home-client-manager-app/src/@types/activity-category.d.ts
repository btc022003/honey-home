declare module IActivityCategory {
  export interface ActivityCategory {
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    name?: string;
    coverImage?: string;
    desc?: string;
    parent?: number;
  }

  export interface ActivityCategoryData {
    code?: number;
    total?: number;
    pages?: number;
    data?: ActivityCategory[];
  }
}
