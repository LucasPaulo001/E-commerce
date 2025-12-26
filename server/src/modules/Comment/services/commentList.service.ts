import { TProduct } from "../../../shared/types/product.type.js";
import { TUser } from "../../../shared/types/user.type.js";
import { ProductRepository } from "../../Product/product.repository.js"
import { CommentRepository } from "../comment.repository.js";

type responseDataComment = {
    _id: string,
    comment: string,
    avaliation: number,
    user: TUser,
    product: TProduct
}

export const ListCommentByProductService = async (productId: string) => {
    const product = await ProductRepository.findById(productId);

    if(!product) throw new Error("Produto não encontrado.");

    const commentsData = await CommentRepository.listByProduct(productId) as unknown as responseDataComment[];

    const commentsFormated = commentsData.map((comment: responseDataComment) => ({
        id: comment._id,
        comment: comment.comment,
        avaliation: comment.avaliation,
        user: {
            id: comment.user._id,
            name: comment.user.name,
            userName: comment.user.userName
        },
        product: {
            id: comment.product._id,
            name: comment.product.name,
            description: comment.product.description,
            price: comment.product.price
        }
    }))


    return{
        commentsFormated
    }
}