import {Tip} from "../entities/tips";
import {dbInitialize} from "../appDatabase";
import {Connection, BaseEntity, getManager, EntityManager} from "typeorm";
import {getEnabledCategories} from "trace_events";
import {connect} from '../server'

export async function createTip(idClient: number, title: string, category: string, date: Date, content: string) {
    let likes = 0
    let newTip: object = new Tip(idClient, content, date, title, category, likes)
    const clientRepo = await connect.getRepository(Tip)
    await clientRepo.save(newTip)
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

export async function getAllTips(category: string) {
    const tipRepo = await connect.getRepository(Tip)
    const tipData = await tipRepo.find({
        select: ["id", "idClient", "title", "category", "content", "date"],
        where: {
            "category" : category
        }
    })
    return tipData
}

export async function findTipByTitle(title: string) {
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

export async function findTipById(id: number) {
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