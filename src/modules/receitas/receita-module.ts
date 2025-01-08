import {Request, Response} from "express";
import {PrismaClient} from "prisma/prisma-client";

const prisma = new PrismaClient()

export const findManyReceita = async (req: Request, res: Response): Promise<any> => {
    const receitas = await prisma.receita.findMany()
    return res.json(receitas)
}

export const salvarReceita = async (req: Request, res: Response): Promise<any> => {
    const {descricao, valor} = req.body
    const receita = await prisma.receita.create({
        data: {
            descricao,
            valor
        }
    })
    return res.json(receita)
}

export const getReceitaById = async (req: Request, res: Response): Promise<any> => {
    const {id} = req.params
    const receita = await prisma.receita.findUnique({
        where: {
            id: Number(id)
        }
    })
    return res.json(receita)
}

export const updateReceitaById = async (req: Request, res: Response): Promise<any> => {
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
}

export const deleteReceitaById = async (req: Request, res: Response): Promise<any> => {
    const {id} = req.params
    await prisma.receita.delete({
        where: {
            id: Number(id)
        }
    })
    return res.send("Receita deletada")
}