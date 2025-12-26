import mongoose, { Schema } from "mongoose";
import { Seller } from "../../shared/types/seller.type.js";

const SellerSchema = new Schema<Seller>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    storeName: {
        type: String,
        required: true
    }
}, { timestamps: true });


export default mongoose.model("Seller", SellerSchema);
