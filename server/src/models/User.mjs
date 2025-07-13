import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,

  email: {
    type: String,
    unique: true,
  },

  password: String,

  role: {
    type: String,
    enum: ["cliente", "admin"],
    default: "cliente",
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

export default mongoose.model("User", UserSchema);


