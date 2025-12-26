import { Response } from "express";
import { CustomRequest } from "../../middlewares/authGuard.js";
import { CreateStoreService, RegisterProductService } from "./services/sellerAction.service.js";

export async function CreateStoreController(req: CustomRequest, res: Response){
    try{

        const userId = req.user._id;

        const { storeName } = req.body;

        const data = {
            userId,
            storeName
        }

        const result = await CreateStoreService(data);

        res.status(201).json(result);
    }
    catch(err: any){
        res.status(500).json({
            msg: "Erro interno do servidor. (create-store)",
            err
        });
    }
}

export async function RegisterProductsController(req: CustomRequest, res: Response){
    try{
        const data = req.body;

        const userId = req.user._id;

        const result = await RegisterProductService(userId, data);

        res.status(201).json(result);
    }
    catch(err: any){
        res.status(500).json({
            msg: "Erro interno do servidor. (create-products)",
            err
        });
    }
}