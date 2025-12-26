import { Response } from "express";
import { CustomRequest } from "../../middlewares/authGuard.js";
import { createCommentService } from "./services/commentAction.service.js";
import { ListCommentByProductService } from "./services/commentList.service.js";

export const createCommentController = async (
  req: CustomRequest,
  res: Response
) => {
  try {

    const userId = req.user._id;
    const productId = req.params.id;
    const data = req.body;

    const result = await createCommentService(productId, userId, data);

    res.status(201).json(result);

  } catch (err: any) {
    res.status(500).json({
      msg: "Erro interno do servidor. (List by category)",
      err: err.message,
    });
  }
};

export const listCommentController = async (
  req: CustomRequest,
  res: Response
) => {
  try {
    const productId = req.params.id;

    const result = await ListCommentByProductService(productId);

    res.status(201).json(result);

  } catch (err: any) {
    res.status(500).json({
      msg: "Erro interno do servidor. (List by category)",
      err: err.message,
    });
  }
};
