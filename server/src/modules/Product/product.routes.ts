import express from "express";
const ProductRouter = express.Router();

//middlewares

import { authGuard } from "../../middlewares/authGuard.js";
import { ListAllProductsController, ListProductsByCategoryController, ProductDetailController, SearchProductController } from "./product.controller.js";

//Rotas

//Config de rotas

ProductRouter.get("/list-products", ListAllProductsController);
ProductRouter.get("/list-category", ListProductsByCategoryController);
ProductRouter.get("/list/search/product", SearchProductController);
ProductRouter.get("/detail/:id/product", ProductDetailController);


export default ProductRouter;