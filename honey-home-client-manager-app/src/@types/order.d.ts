declare module IOrder {
  export interface OrderDetail {
    createdAt: any;
    updatedAt: any;
    id: number;
    price: number;
    amount: number;
    product: IProduct.Product;
    order: number;
  }

  export interface Order {
    details?: Detail[];
    createdAt?: any;
    updatedAt?: any;
    id?: number;
    price?: number;
    address?: string;
    receiver?: string;
    payStatus?: number;
    orderStatus?: number;
    user?: IUser.User;
  }

  export interface OrderData {
    code: number;
    total: number;
    pages: number;
    data: Order[];
  }
}
