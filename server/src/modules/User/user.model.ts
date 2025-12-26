import mongoose, { Schema } from "mongoose";
import { TUser } from "../../shared/types/user.type.js";

const UserSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true
  },

  userName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    unique: true,
  },

  password: String,

  role: {
    type: String,
    enum: ["admin", "seller", "client"],
    default: "client",
  },

  sexo: {
    type: String,
    enum: ["masculino", "feminino", "outro"],
  },

  phone: {
    type: String,
  },

  adress: [
    {
      rua: String,
      numero: String,
      bairro: String,
      cidade: String,
      estado: String,
      cep: String,
      complemento: String,
    },
  ],

  active: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

export default mongoose.model<TUser>("User", UserSchema);


