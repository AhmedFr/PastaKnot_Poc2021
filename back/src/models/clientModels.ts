import {Client} from "../entities/clients";
import {dbInitialize} from "../appDatabase";
import {Connection, BaseEntity, getManager, EntityManager} from "typeorm";

export async function createClient(name: string, password: string, conn: Connection) {
    let newClient: object = new Client(name, password)
    const clientRepo = await conn.getRepository(Client)
    await clientRepo.save(newClient)
}

export async function findClient(name: string, password: string, conn: Connection) {
    const clientRepo = await conn.getRepository(Client)
    const clientData = await clientRepo.find({
        select: ["name", "password", "id"],
        where: {
            "name" : name,
            "password": password
        }
    })
    return clientData
}