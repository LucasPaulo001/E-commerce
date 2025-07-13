import User from "../models/User.mjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const jwt_secret = process.env.JWT_SECRET;

export const authGuard = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(422).json({
      errors: ["Acesso negado!"],
    });
  }

  try {
    const verify = jwt.verify(token, jwt_secret);
    req.user = await User.findById(verify.id).select("-password");
    next();
  } catch (error) {
    res.status(500).json({
      errors: ["Token inválido ou expirado!"],
    });
    console.log(error);
  }
};
