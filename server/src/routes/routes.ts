import express from "express";
const router = express.Router();

//Rotas
import UserRouter from "../modules/User/user.routes.js";
import ProductRouter from "../modules/Product/product.routes.js";

router.use("/api/users", UserRouter);
router.use("/api/product", ProductRouter);

export default router;