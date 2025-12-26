import { Types } from "mongoose";
import { TComment } from "../../../shared/types/comment.types.js";
import { ProductRepository } from "../../Product/product.repository.js";
import { UserRepository } from "../../User/user.repository.js";
import { CommentRepository } from "../comment.repository.js";

export const createCommentService = async (productId: string, userId: string, data: TComment) => {
    const product = await ProductRepository.findById(productId);

    if (!product) throw new Error("Produto não encontrado.");

    const user = await UserRepository.findById(userId);

    if(!user) throw new Error("Usuário não encontrado.");

    const userObjectId = new Types.ObjectId(user._id);
    const productObjectId = new Types.ObjectId(product._id);

    const newComment = await CommentRepository.create({
        user: userObjectId,
        comment: data.comment,
        product: productObjectId,
        avaliation: data.avaliation

    });

    return {
        msg: "Comentário adicionado com sucesso",
        newComment
    }

}