declare module ICarts {
  export interface Cart {
    createdAt: number;
    updatedAt: number;
    id: number;
    price: number;
    amount: number;
    user: IUser.User;
    product: IProduct.Product;
  }
}
