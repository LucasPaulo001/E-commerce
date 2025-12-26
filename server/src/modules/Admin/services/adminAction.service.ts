import { Types } from "mongoose";
import { SellerRepository } from "../../Seller/seller.repository.js";
import { UserRepository } from "../../User/user.repository.js";

export async function UpdateRoleService(adminId: string, userId: string, role: "admin" | "seller" | "client"){
    
    const user = await UserRepository.findById(userId);

    if(!user) throw new Error("Usuário não encontrado.");

    if (user.id === adminId) throw new Error("Permissões insuficientes.");

    const data = {
        role
    }

    const userObjectId = new Types.ObjectId(user._id);

    const dataSeller = {
        user: userObjectId,
        storeName: "Sem nome"
    }

    await UserRepository.update(userId, data);

    await SellerRepository.create(dataSeller);

    return {
        msg: "Atribuição de usuário modificada."
    }
}