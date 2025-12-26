import { NextFunction, Response } from "express";
import { CustomRequest } from "./authGuard.js";

type role = "admin" | "seller" | "client";

export function AuthRole(...allowedRoles: role[]) {
    return (req: CustomRequest, res: Response, next: NextFunction) => {
        const user = req.user;

        if (!user) return res.status(401).json({ message: "Usuário não autenticado." });

        if (!allowedRoles.includes(user.role)) {
            return res.status(403).json({ message: "Acesso negado." });
        }

        next();
    }
}