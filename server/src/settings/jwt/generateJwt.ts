
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwt_secret = process.env.JWT_SECRET;

//Gerar token de usuário
export const generateToken = async (id: string) => {
  if(!jwt_secret) throw new Error("Variável de ambiente 'jwt_secret' não encontrada.");
  return jwt.sign({ id }, jwt_secret, { expiresIn: "7d" });
};
