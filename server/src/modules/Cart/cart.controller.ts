import { Response } from "express";
import { CustomRequest } from "../../middlewares/authGuard.js";
import { AddProductToCartService, RemoveProductToCartService } from "./services/cartAction.service.js";
import { ListProductsByCartService } from "./services/cartList.service.js";

export const ListProductsByCartController = async (
  req: CustomRequest,
  res: Response
) => {
  try {
    const userId = req.user._id;

    console.log(userId)

    const result = await ListProductsByCartService(userId);

    res.status(200).json(result);
  } catch (err: any) {
    res.status(500).json({
      msg: "Erro interno do servidor. (List by cart)",
      err: err.message,
    });
  }
};

export const AddProductToCartController = async (
  req: CustomRequest,
  res: Response
) => {
  try {
    const userId = req.user._id;

    const productId = req.params.id;

    const {quantity} = req.body;

    const result = await  AddProductToCartService(userId, productId, quantity);

    res.status(200).json(result);
  } catch (err: any) {
    res.status(500).json({
      msg: "Erro interno do servidor. (Add to cart)",
      err: err.message,
    });
  }
};

export const RemoveProductsByCartController = async (req: CustomRequest, res: Response) => {
    try{

        const userId = req.user._id;

         const productId = req.params.id;

        const result = await RemoveProductToCartService(userId, productId);

        res.status(200).json(result);

    }
    catch(err: any){

        res.status(500).json({
        msg: "Erro interno do servidor. (List by category)",
        err: err.message,
        });

    }
}
