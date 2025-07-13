import express from "express";
const router = express.Router();

//Rotas
import userRouter from "./userRoutes.mjs";

router.use("/api/users", userRouter);

export default router;