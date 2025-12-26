import { Response } from "express";
import { CustomRequest } from "../../middlewares/authGuard.js";
import { EditProfileService, loginService, ProfileService, registerService } from "./services/userAction.service.js";

export const RegisterController = async (req: CustomRequest, res: Response) => {
    try{

        const data = req.body;

        const result = await registerService(data);

        res.status(200).json(result);

    }
    catch(err: any){
        res.status(500).json({
            msg: "Erro interno do servidor. (register)",
            err
        });
    }
}

export const LoginController = async (req: CustomRequest, res: Response) => {
    try{

        const { email, password } = req.body;

        const result = await loginService(email, password);

        res.status(200).json({msg: result.msg, user: result.id, token: result.token});

    }
    catch(err: any){
        res.status(500).json({
            msg: "Erro interno do servidor. (Login)",
            err: err.message
        });
    }
}

export const ProfileController = async (req: CustomRequest, res: Response) => {
    try{
        const user = req.user;

        const result = await ProfileService(user);

        res.status(200).json(result)
    }
        catch(err: any){
        res.status(500).json({
            msg: "Erro interno do servidor. (register)",
            err
        });
    }
}

export const EditProfileController = async (req: CustomRequest, res: Response) => {
    try{
        const data = req.body;

        const userId = req.user._id;

        const result = await EditProfileService(userId, data);

        res.status(200).json(result)
    }
        catch(err: any){
        res.status(500).json({
            msg: "Erro interno do servidor. (register)",
            err: err.message
        });
    }
}
