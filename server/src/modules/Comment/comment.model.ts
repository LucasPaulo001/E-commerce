import mongoose, { Schema } from "mongoose";
import { TComment } from "../../shared/types/comment.types.js";

export const CommentSchema = new mongoose.Schema<TComment>({

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    comment: {
        type: String,
        required: true
    },

    avaliation: {
        type: Number,
        min: 0,
        max: 10
    },

    product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }



}, {timestamps: true})

export default mongoose.model("Comment", CommentSchema);