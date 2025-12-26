import { Router } from "express";
import { authGuard } from "../../middlewares/authGuard.js";
import { CreateStoreController, RegisterProductsController } from "./seller.controller.js";
import { AuthRole } from "../../middlewares/authRole.js";
const sellerRouter = Router();


sellerRouter.patch("/create-store", authGuard, AuthRole("seller"), CreateStoreController);

sellerRouter.post("/create-product", authGuard, AuthRole("seller"), RegisterProductsController);


export default sellerRouter;