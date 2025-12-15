import express from "express";
const UserRouter = express.Router();

//middlewares

import { validation } from "../../middlewares/handleValidation.js";
import { loginValidations, registerValidations } from "../../middlewares/userValidation.js";
import { EditProfileController, LoginController, ProfileController, RegisterController } from "./user.controller.js";
import { authGuard } from "../../middlewares/authGuard.js";

//Rotas

//Config de rotas
UserRouter.post("/register", validation, RegisterController);
UserRouter.post("/login", loginValidations(), validation, LoginController);
UserRouter.get("/profile", authGuard, ProfileController);
UserRouter.patch("/edit-profile", authGuard, EditProfileController);

export default UserRouter;