import mongoose, { Schema } from "mongoose";
import { TCart } from "../../shared/types/user.type.js";

const CartSchema = new mongoose.Schema<TCart>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }],

}, { timestamps: true });

export default mongoose.model<TCart>("Cart", CartSchema);