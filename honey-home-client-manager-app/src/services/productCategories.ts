import { request } from 'umi';

/**
 * 加载100条分类数据时
 * @returns
 */
export function allCategories() {
  return request<IProductCategory.ProductCategoryData>('/api/v1/admin/productcategory?per=100');
}
