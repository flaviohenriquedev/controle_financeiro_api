import express from "express"
import {
    deleteDespesaById,
    findManyDespesa,
    getDespesaById,
    salvarDespesa,
    updateDespesaById
} from "../modules/despesas/despesa-module";

const rotasDespesas = express.Router();

rotasDespesas.get("/", findManyDespesa);
rotasDespesas.post("/", salvarDespesa);
rotasDespesas.get("/:id", getDespesaById);
rotasDespesas.put("/:id", updateDespesaById);
rotasDespesas.delete("/:id", deleteDespesaById)

export default rotasDespesas;