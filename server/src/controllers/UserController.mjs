import User from "../models/User.mjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";

const jwt_secret = process.env.JWT_SECRET;

//Gerar token de usuário
const genetateToken = (id) => {
  return jwt.sign({ id }, jwt_secret, { expiresIn: "7d" });
};

//Registrar usuário
export const register = async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(422).json({
        errors: ["Usuário já existe!"],
      });
    }

    const salts = await bcrypt.genSalt();
    const hashPass = await bcrypt.hash(password, salts);

    await User.create({
      name,
      email,
      password: hashPass,
    });

    res.status(201).json({
      msg: "Usuário cadastrado com sucesso!",
    });
  } catch (err) {
    res.status(500).json({
      errors: ["Erro interno do servidor!"],
    });
    console.log(err);
  }
};

//Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(422).json({
        errors: ["Usuário não encontrado!"],
      });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(422).json({
        errors: ["Senha incorreta!"],
      });
    }

    res.status(201).json({
      _id: user._id,
      token: genetateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({
      errors: ["Erro interno do servidor!"],
    });
    console.log(err);
  }
};

//Dados do usuário logado
export const getCurrentUser = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      errors: ["Erro interno do servidor!"],
    });
    console.log(err);
  }
};

//Edição de dados do usuário
export const editData = async (req, res) => {
  const { name, password, phone, adress } = req.body;
  const userId = req.user._id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ errors: ["Usuário não encontrado!"] });
    }

    if (name) user.name = name;

    if (password) {
      const salts = await bcrypt.genSalt();
      user.password = await bcrypt.hash(password, salts);
    }

    if (phone) user.phone = phone;

    await user.save();

    res.status(201).json({ msg: "Dados do usuário atualizados com sucesso!" });
  } catch (err) {
    res.status(500).json({ errors: ["Erro interno do servidor!"] });
    console.log(err);
  }
};
