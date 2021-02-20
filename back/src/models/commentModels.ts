import {Comment} from "../entities/comments";
import {dbInitialize} from "../appDatabase";
import {Connection, BaseEntity, getManager, EntityManager} from "typeorm";
import {getEnabledCategories} from "trace_events";

export async function createComment(idTip: number, idClient: number, content: string, date: Date) {
    const connect = await dbInitialize()
    let newComment: object = new Comment(idTip, idClient, content, date)
    const commentRepo = await connect.getRepository(Comment)
    await commentRepo.save(newComment)
}

export async function getAllComments(idTip: number) {
    const connect = await dbInitialize()
    const commentRepo = await connect.getRepository((Comment))
    const commentsData = await commentRepo.find({
        select: ["idTip", "idClient", "content", "date"],
        where: {
            "idTip": idTip
        }
    })
    return commentsData
}

export async function findCommentById(id: number, idTip: number) {
    const connect = await dbInitialize()
    const commentRepo = await connect.getRepository((Comment))
    const commentsData = await commentRepo.find({
        select: ["idTip", "idClient", "content", "date"],
        where: {
            "idTip": idTip,
            "id": id
        }
    })
    if (commentsData.length === 0)
        return 404
    return commentsData[0]
}
