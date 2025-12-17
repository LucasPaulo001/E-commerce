import { TUser } from "./user.type";

export type TComment = {
    id: string;
    comment: string;
    avaliation: number
    user: TUser
}