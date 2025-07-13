import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Olá, E-commerce");
});

export default router