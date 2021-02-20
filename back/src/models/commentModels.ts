import {Comment} from "../entities/comments";
import {dbInitialize} from "../appDatabase";
import {Connection, BaseEntity, getManager, EntityManager} from "typeorm";
import {getEnabledCategories} from "trace_events";

export async function createComment(idTip: number, idClient: number, content: string, date: Date, conn: Connection) {
    let newComment: object = new Comment(idTip, idClient, content, date)
    const commentRepo = await conn.getRepository(Comment)
    await commentRepo.save(newComment)
}

export async function getAllComments(idTip: number, conn: Connection) {
    const commentRepo = await conn.getRepository((Comment))
    const commentsData = await commentRepo.find({
        select: ["idTip", "idClient", "content", "date"],
        where: {
            "idTip": idTip
        }
    })
    return commentsData
}

export async function findCommentById(id: number, idTip: number, conn: Connection) {
    const commentRepo = await conn.getRepository((Comment))
    const commentsData = await commentRepo.find({
        select: ["idTip", "idClient", "content", "date"],
        where: {
            "idTip": idTip,
            "id": id
        }
    })
    return commentsData
}
