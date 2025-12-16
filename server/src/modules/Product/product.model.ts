import mongoose, { Schema } from "mongoose";
import { TProduct } from "../../shared/types/product.type.js";

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

    price: { 
        type: Number, 
        required: true 
    },

    images: [{ 
        type: String 
    }],

    category: { 
        type: String, 
        required: true 
    },

    stock: { 
        type: Number, 
        default: 0 
    },

    isActive: { 
        type: Boolean, 
        default: true 
    },
  },
  { timestamps: true }
);

ProductSchema.index({
    name: "text",
    description: "text",
    category: "text"
})

// Exporta o model
export const ProductModel = mongoose.model<TProduct>("Product", ProductSchema);