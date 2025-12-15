import express from "express";
const ProductRouter = express.Router();

//middlewares

import { authGuard } from "../../middlewares/authGuard.js";
import { ListAllProductsController } from "./product.controller.js";

//Rotas

//Config de rotas

ProductRouter.get("/list-products", ListAllProductsController);


export default ProductRouter;