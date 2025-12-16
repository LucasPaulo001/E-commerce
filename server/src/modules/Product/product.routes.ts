import express from "express";
const ProductRouter = express.Router();

//middlewares

import { authGuard } from "../../middlewares/authGuard.js";
import { ListAllProductsController, ListProductsByCategoryController, SearchProductController } from "./product.controller.js";

//Rotas

//Config de rotas

ProductRouter.get("/list-products", ListAllProductsController);
ProductRouter.get("/list-category", ListProductsByCategoryController);
ProductRouter.get("/list/search/product", SearchProductController);


export default ProductRouter;