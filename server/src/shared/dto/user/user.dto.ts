import { TAdress } from "../../types/user.type.js";

export type TCreateUser = {
    name: string;
    email: string;
    userName: string;
    sexo: string,
    password: string;
    phone: string;
}

export type TUpdateUser = {
    name?: string;
    email?: string;
    sexo?: string;
    adress?: TAdress;
    role?: "admin" | "seller" | "client" | undefined;
    userName?: string;
    password?: string;
    phone?: string;
}