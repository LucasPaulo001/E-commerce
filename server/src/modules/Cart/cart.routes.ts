import express from "express";
const CartRouter = express.Router();

//middlewares

import { authGuard } from "../../middlewares/authGuard.js";
import { AddProductToCartController, ListProductsByCartController, RemoveProductsByCartController } from "./cart.controller.js";

//Rotas

//Config de rotas
CartRouter.get("/products", authGuard, ListProductsByCartController);
CartRouter.patch("/products/:id/add-product", authGuard, AddProductToCartController);
CartRouter.patch("/products/:id/remove-product", authGuard, RemoveProductsByCartController)



export default CartRouter;