import mongoose, { Schema } from "mongoose";
import { TProduct } from "../../shared/types/product.type.js";

const VariantSchema = new Schema({
  color: { type: String, required: false },
  size: { type: String, required: false },
  stock: { type: Number, required: true, default: 0 },
  price: { type: Number, required: false },
  sku: { type: String, unique: true },

  images: [{
    type: String,
    required: true
  }]
});

const ProductSchema: Schema<TProduct> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    variants: [VariantSchema],

    seller: {
      type: Schema.Types.ObjectId,
      ref: "Seller",
    },

    images: [{
      type: String
    }],

    category: {
      type: String,
      required: true
    },

    isActive: {
      type: Boolean,
      default: true
    },
  },
  { timestamps: true, }
);

// Exporta o model
export default mongoose.model<TProduct>("Product", ProductSchema);