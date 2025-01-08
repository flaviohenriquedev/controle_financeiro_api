import express from "express"
import {
    deleteReceitaById,
    findManyReceita,
    getReceitaById,
    salvarReceita,
    updateReceitaById
} from "../modules/receitas/receita-module";

const rotasReceitas = express.Router();

rotasReceitas.get("/", findManyReceita);
rotasReceitas.post("/", salvarReceita);
rotasReceitas.get("/:id", getReceitaById);
rotasReceitas.put("/:id", updateReceitaById);
rotasReceitas.delete("/:id", deleteReceitaById)

export default rotasReceitas;