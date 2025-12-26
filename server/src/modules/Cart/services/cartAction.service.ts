import { Types } from "mongoose";
import { ProductRepository } from "../../Product/product.repository.js";
import { UserRepository } from "../../User/user.repository.js";
import { CartRepository } from "../cart.repository.js";

export const AddProductToCartService = async (userId: string, productId: string, quantity: number) => {

  if(quantity < 1) throw new Error("Quantidade inválida");
  
  const product = await ProductRepository.findById(productId);

  const user = await UserRepository.findById(userId);

  if(!user) throw new Error("Usuário não encontrado.");

  if (!product) throw new Error("Produto não encontrado.");

  const cart = await CartRepository.findByUser(userId);

  if(!cart) throw new Error("Carrinho não encontrado");

  const newProductToCart = await CartRepository.add(productId, cart._id, quantity);

  return {
    msg: "Produto adicionado ao carrinho.",
    product: newProductToCart
  }
};

export const RemoveProductToCartService = async (userId: string, productId: string) => {
  const product = await ProductRepository.findById(productId);

  const user = await UserRepository.findById(userId);

  if(!user) throw new Error("Usuário não encontrado.");

  if (!product) throw new Error("Produto não encontrado.");

  const cart = await CartRepository.findByUser(userId);

  if(!cart) throw new Error("Carrinho não encontrado");

  await CartRepository.remove(productId, userId);

  return {
    msg: "Produto removido ao carrinho.",
  }
};