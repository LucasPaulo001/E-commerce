import { Types } from "mongoose";
import cartModel from "./cart.model.js";

export const CartRepository = {
  async findByUser(userId: string) {
    return cartModel
      .findOne({ user: userId })
      .populate("user")
      .populate("products");
  },

  async add(productId: string, cartId: string) {
    return cartModel.findOneAndUpdate(
      { _id: cartId },
      { $addToSet: { products: productId } },
      { new: true, upsert: true }
    );
  },

  async remove(productId: string, userId: string) {
    return cartModel.findOneAndUpdate(
      { user: userId },
      { $pull: { products: productId } },
      { new: true }
    );
  },
};
