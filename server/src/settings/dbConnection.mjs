import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connection = async (app) => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Conectado ao mongoose!")
  } catch (err) {
    console.log(err);
  }
};
