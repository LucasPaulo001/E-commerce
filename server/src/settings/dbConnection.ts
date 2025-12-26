import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connection = async () => {
  try {
    const db_uri = process.env.DB_URI;
    if(!db_uri) throw new Error("Variável 'db_uri' indefinida.");
    await mongoose.connect(db_uri, {
      bufferCommands: false, 
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Conectado ao mongoose!")
  } catch (err) {
    console.log(err);
  }
};
