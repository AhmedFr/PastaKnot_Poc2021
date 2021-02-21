import {Tip} from "../entities/tips";
import {dbInitialize} from "../appDatabase";
import {Connection, BaseEntity, getManager, EntityManager} from "typeorm";
import {getEnabledCategories} from "trace_events";

interface tipInterface {
    idClient: number
    title: string
    category: string
    date: Date
    content: string
}

export async function createTip(tip: tipInterface, connect: Connection) {
    let likes = 0
    let newTip: object = new Tip(tip.idClient, tip.content, tip.date, tip.title, tip.category, likes)
    const clientRepo = await connect.getRepository(Tip)
    await clientRepo.save(newTip)
    return newTip
}
/*              WORK IN PROGRESS
export async function likeTip(idClient: number, idTip: number, conn: Connection) {
    const tipRepo = await conn.getRepository(Tip)
    const tipData = await tipRepo.find({

    }
}
export async function unlikeTip(idClient: number, idTip: number, conn: Connection) {
    const tipRepo = await conn.getRepository(Tip)
    const tipData = await tipRepo.find({

    }
}

*/

export async function getAllTips(category: string, connect: Connection) {
    const tipRepo = await connect.getRepository(Tip)
    const tipData = await tipRepo.find({
        select: ["id", "idClient", "title", "category", "content", "date"],
        where: {
            "category" : category
        }
    })
    return tipData
}

export async function findTipByTitle(title: string, connect: Connection) {
    const tipRepo = await connect.getRepository(Tip)
    const tipData = await tipRepo.find({
        select: ["id", "idClient", "title", "category", "content", "date"],
        where: {
            "title" : title
        }
    })
    if (tipData.length === 0)
        return 404
    return tipData[0]
}

export async function findTipById(id: number, connect: Connection) {
    const tipRepo = await connect.getRepository(Tip)
    const tipData = await tipRepo.find({
        select: ["id", "idClient", "title", "category", "content", "date"],
        where: {
            "id" : id
        }
    })
    if (tipData.length === 0)
        return 404
    return tipData[0]
}