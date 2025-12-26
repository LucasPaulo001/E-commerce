import { Types } from "mongoose";

export type TComment = {
    _id?: string;
    user: Types.ObjectId;
    product: Types.ObjectId;
    comment: string;
    avaliation?: number;
    createdAt?: Date;
}