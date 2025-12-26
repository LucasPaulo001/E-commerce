import { Types } from "mongoose";
import { TUser } from "./user.type.js";

export type TProduct = {
  _id?: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  stock: number;
  variants: variant[];
  seller: Types.ObjectId;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type variant = {
  color: string;
  size: string;
  stock: number;
  price: number;
  sku: string;
}

export type TCartItemPopulated = {
  product: TProduct;
  quantity: number;
};


export type TCartPopulated = {
  _id: string;
  user: TUser;
  products: TCartItemPopulated[];
};
