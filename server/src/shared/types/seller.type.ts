import { Types } from "mongoose";

export type Seller = {
    _id?: string;
    user: Types.ObjectId;
    storeName: string;
}