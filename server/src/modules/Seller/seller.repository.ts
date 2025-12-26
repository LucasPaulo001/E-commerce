import { Seller } from "../../shared/types/seller.type.js";
import sellerModel from "./seller.model.js";

export const SellerRepository = {

    async create(data: Seller){
        return await sellerModel.create(data);
    },

    async findByUser(userId: string){
        return await sellerModel.findOne({ user: userId });
    }

}