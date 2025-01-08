import {Request, Response} from "express";
import {PrismaClient} from "prisma/prisma-client";

const prisma = new PrismaClient()

export const findManyDespesa = async (req: Request, res: Response): Promise<any> => {
    const despesas = await prisma.despesa.findMany()
    return res.json(despesas)
}

export const salvarDespesa = async (req: Request, res: Response): Promise<any> => {
    const {descricao, valor} = req.body
    const despesa = await prisma.despesa.create({
        data: {
            descricao,
            valor
        }
    })
    return res.json(despesa)
}

export const getDespesaById = async (req: Request, res: Response): Promise<any> => {
    const {id} = req.params
    const despesa = await prisma.despesa.findUnique({
        where: {
            id: Number(id)
        }
    })
    return res.json(despesa)
}

export const updateDespesaById = async (req: Request, res: Response): Promise<any> => {
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
}

export const deleteDespesaById = async (req: Request, res: Response): Promise<any> => {
    const {id} = req.params
    await prisma.despesa.delete({
        where: {
            id: Number(id)
        }
    })
    return res.send("Despesa deletada")
}