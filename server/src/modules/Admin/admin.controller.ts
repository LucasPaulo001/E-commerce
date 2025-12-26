import { Response } from "express";
import { CustomRequest } from "../../middlewares/authGuard.js";
import { UpdateRoleService } from "./services/adminAction.service.js";

export async function UpdateRoleController(req: CustomRequest, res: Response) {
    try {   
        const userId = req.params.id;

        const adminId = req.user._id;

        const {role} = req.body;

        const result = await UpdateRoleService(adminId, userId, role);

        res.status(201).json(result);
    }       
    catch (err: any) {
        res.status(500).json({
            msg: "Erro interno do servidor. (register)",
            err: err.message,
        });
    }
}