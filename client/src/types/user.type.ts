type Adress = {
  rua?: string;
  numero?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  complemento?: string;
};

export type TUser = {
  id: string;
  name: string;
  userName: string;
  email: string;
  role: string;
  phone: string;
  adress: Adress;
  acive: boolean;
  createdAt: string;
};
