import { TUser } from "./user.type.js";

export type TProduct = {
    _id?: string;
    name: string;
    description: string;
    price: number;
    images: string[]; 
    category: string;
    stock: number;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}


export type TCartPopulated = {
    _id: string
    id: string;
    user: TUser;
    products: TProduct[]
}