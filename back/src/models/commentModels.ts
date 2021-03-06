import {Comment} from "../entities/comments";
import {dbInitialize} from "../appDatabase";
import {Connection, BaseEntity, getManager, EntityManager} from "typeorm";
import {getEnabledCategories} from "trace_events";

interface commentInterface {
    idTip: number
    idClient: number
    content: string
    date: Date
}

export async function createComment(comment: commentInterface, connect: Connection) {
    let newComment: object = new Comment(comment.idTip, comment.idClient, comment.content, comment.date)
    const commentRepo = await connect.getRepository(Comment)
    await commentRepo.save(newComment)
    return newComment
}

export async function getAllComments(idTip: number, connect: Connection) {
    const commentRepo = await connect.getRepository((Comment))
    const commentsData = await commentRepo.find({
        select: ["idTip", "idClient", "content", "date"],
        where: {
            "idTip": idTip
        }
    })
    return commentsData
}

export async function findCommentById(id: number, idTip: number, connect: Connection) {
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
