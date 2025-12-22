import { Types } from "mongoose";
import cartModel from "./cart.model.js";

export const CartRepository = {
  async findByUser(userId: string) {
    return cartModel
      .findOne({ user: userId })
      .populate("user")
      .populate("products.product")
      .lean()
  },

  async add(productId: string, cartId: string, quantity: number) {
    return cartModel.findOneAndUpdate(
      { _id: cartId, "products.product": { $ne: productId } },
      {
        $push: {
          products: { product: productId, quantity },
        },
      },
      { new: true, upsert: true }
    )
  },

  async remove(productId: string, userId: string) {
    return cartModel.findOneAndUpdate(
      { user: userId },
      { $pull: { products: productId } },
      { new: true }
    );
  },
};
