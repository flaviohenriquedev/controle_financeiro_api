import express, {Request, Response} from "express"
import {PrismaClient} from "prisma/prisma-client"
const cors = require("cors")

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    app.use(cors());
    next()
})

app.get("/despesas", async (req: Request, res: Response): Promise<any> => {
    const despesas = await prisma.despesa.findMany()
    return res.json(despesas)
})

app.post("/despesas", async (req: Request, res: Response): Promise<any> => {
    const {descricao, valor} = req.body
    const despesa = await prisma.despesa.create({
        data: {
            descricao,
            valor
        }
    })
    return res.json(despesa)
})

app.get("/despesas/:id", async (req: Request, res: Response): Promise<any> => {
    const {id} = req.params
    const despesa = await prisma.despesa.findUnique({
        where: {
            id: Number(id)
        }
    })
    return res.json(despesa)
})

app.put("/despesas/:id", async (req: Request, res: Response): Promise<any> => {
    const {id} = req.params
    const {descricao, valor} = req.body

    const despesa = await prisma.despesa.update({
        data: {
            descricao,
            valor
        }, where: {
            id: Number(id)
        }
    })
    return res.json(despesa)
})

app.delete("/despesas/:id", async (req: Request, res: Response): Promise<any> => {
    const {id} = req.params
    await prisma.despesa.delete({
        where: {
            id: Number(id)
        }
    })
    return res.send("Despesa deletada")
})

/*
-------------------------------
 */

app.get("/receitas", async (req: Request, res: Response): Promise<any> => {
    const receitas = await prisma.receita.findMany()
    return res.json(receitas)
})

app.post("/receitas", async (req: Request, res: Response): Promise<any> => {
    const {descricao, valor} = req.body
    const receita = await prisma.receita.create({
        data: {
            descricao,
            valor
        }
    })
    return res.json(receita)
})

app.get("/receitas/:id", async (req: Request, res: Response): Promise<any> => {
    const {id} = req.params
    const receita = await prisma.receita.findUnique({
        where: {
            id: Number(id)
        }
    })
    return res.json(receita)
})

app.put("/receitas/:id", async (req: Request, res: Response): Promise<any> => {
    const {id} = req.params
    const {descricao, valor} = req.body

    const receita = await prisma.receita.update({
        data: {
            descricao,
            valor
        }, where: {
            id: Number(id)
        }
    })
    return res.json(receita)
})

app.delete("/receitas/:id", async (req: Request, res: Response): Promise<any> => {
    const {id} = req.params
    await prisma.receita.delete({
        where: {
            id: Number(id)
        }
    })
    return res.send("Receita deletada")
})

app.listen(3333, () => console.log("Rodando na porta 3333"))