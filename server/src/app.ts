import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Rotas
import router from "./routes/routes.js";
app.use(router);

//database
import { connection } from "./settings/dbConnection.js";

connection().then(() => {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Banco conectado e Servidor rodando na porta ${PORT}`);
  });
}).catch(err => {
  console.error("Falha ao iniciar servidor:", err);
});
