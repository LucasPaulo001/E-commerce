import { Router } from "express";
import { authGuard } from "../../middlewares/authGuard.js";
import { UpdateRoleController } from "./admin.controller.js";
import { AuthRole } from "../../middlewares/authRole.js";
const adminRouter = Router();

adminRouter.patch("/modify-role/:id/user", authGuard, AuthRole("admin"), UpdateRoleController);


export default adminRouter;