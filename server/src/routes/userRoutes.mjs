import express from "express";
const userRouter = express.Router();

//middlewares
import {
  registerValidations,
  loginValidations,
} from "../middlewares/userValidation.mjs";
import { validation } from "../middlewares/handleValidation.mjs";

//Rotas
import { register, login, getCurrentUser, editData } from "../controllers/UserController.mjs";
import { authGuard } from "../middlewares/authGuard.mjs";

//Config de rotas
userRouter.post("/register", registerValidations(), validation, register);
userRouter.post("/login", loginValidations(), validation, login);
userRouter.get("/profile", authGuard, getCurrentUser);
userRouter.patch("/editUser", authGuard, editData);

export default userRouter;
