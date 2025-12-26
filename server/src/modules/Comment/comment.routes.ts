import { authGuard } from "../../middlewares/authGuard.js";
import { createCommentController, listCommentController } from "./comment.controller.js";
import { Router } from "express";
const commentRouter = Router();


commentRouter.post("/:id/product", authGuard, createCommentController);
commentRouter.get("/:id/product", listCommentController);


export default commentRouter;