export type TAdress = {
    rua?: string,
    numero?: string,
    bairro?: string,
    cidade?: string,
    estado?: string,
    cep?: string,
    complemento?: string,
}

export type TUser = {
    _id: string;
    name: string;
    email: string;
    userName: string;
    sexo: "masculino" | "feminino" | "outros",
    password: string;
    role: "admin" | "seller" | "client";
    phone: string;
    adress: TAdress;
    active: boolean;
    createdAt: Date;
}