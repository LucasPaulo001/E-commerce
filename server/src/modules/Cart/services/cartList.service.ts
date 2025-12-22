import { Types } from "mongoose";
import { UserRepository } from "../../User/user.repository.js";
import { CartRepository } from "../cart.repository.js";
import { TCart, TUser } from "../../../shared/types/user.type.js";
import {
  TCartPopulated,
  TProduct,
} from "../../../shared/types/product.type.js";

export const ListProductsByCartService = async (userId: string) => {
  const user = await UserRepository.findById(userId);

  if (!user) throw new Error("Usuário não encontrado.");

  const cart = (await CartRepository.findByUser(
    userId
  )) as unknown as TCartPopulated;

  if (!cart) throw new Error("Carrinho não encontrado.");

  const cartDetail = {
    id: cart._id,
    user: {
      id: cart.user._id,
      name: cart.user?.name,
      role: cart.user.role,
      userName: cart.user.userName,
      phone: cart.user.phone,
    },
    products: cart.products.map((item: any) => ({
      product: {
        id: item.product._id,
        name: item.product.name,
        description: item.product.description,
        category: item.product.category,
        price: item.product.price,
        stock: item.product.stock,
        images: item.product.images,
      },
      quantity: item.quantity,
    })),
  };

  return {
    cartDetail,
  };
};
