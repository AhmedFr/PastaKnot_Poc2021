import {Tip} from "../entities/tips";
import {dbInitialize} from "../appDatabase";
import {Connection, BaseEntity, getManager, EntityManager} from "typeorm";
import {getEnabledCategories} from "trace_events";

export async function createTip(idClient: number, title: string, category: string, date: Date, content: string) {
    const connect = await dbInitialize()
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
export async function findTipByTitle(title: string) {
    const connect = await dbInitialize()
    const tipRepo = await connect.getRepository(Tip)
    const tipData = await tipRepo.find({
        select: ["id", "idClient", "title", "category", "content", "date"],
        where: {
            "title" : title
        }
    })
    return tipData
}

export async function findTipById(id: number) {
    const connect = await dbInitialize()
    const tipRepo = await connect.getRepository(Tip)
    const tipData = await tipRepo.find({
        select: ["id", "idClient", "title", "category", "content", "date"],
        where: {
            "id" : id
        }
    })
    return tipData
}