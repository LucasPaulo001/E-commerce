import { TComment } from "../../shared/types/comment.types.js";
import commentModel from "./comment.model.js";

export const CommentRepository = {
    async create(data: TComment){
        await commentModel.create(data);
    },

    async listByProduct(productId: string){
        return commentModel.find({ product: productId }).populate("user");
    }
}