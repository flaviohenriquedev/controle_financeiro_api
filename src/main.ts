import express from "express"
import rotasDespesas from "./routes/despesa-route";
import rotasReceitas from "./routes/receita-route";
import cors from "cors";

const app = express()

app.use(express.json())

app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    app.use(cors());

    app.use("/despesas", rotasDespesas)
    app.use("/receitas", rotasReceitas)

    next()
})

app.listen(3333, () => console.log("Rodando na porta 3333"))