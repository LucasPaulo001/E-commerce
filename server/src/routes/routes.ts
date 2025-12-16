import express from "express";
const router = express.Router();

//Rotas
import UserRouter from "../modules/User/user.routes.js";
import ProductRouter from "../modules/Product/product.routes.js";
import CartRouter from "../modules/Cart/cart.routes.js";

router.use("/api/users", UserRouter);
router.use("/api/product", ProductRouter);
router.use("/api/cart", CartRouter);

export default router;