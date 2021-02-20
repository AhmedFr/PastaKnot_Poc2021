import {Client} from "../entities/clients";
import {dbInitialize} from "../appDatabase";
import {Connection, BaseEntity, getManager, EntityManager} from "typeorm";

export async function createClient(name: string, password: string, conn: Connection) {
    let newClient: object = new Client(name, password)
    const clientRepo = await conn.getRepository(Client)
    await clientRepo.save(newClient)
}

export async function findClientByName(name: string, password: string) {
    const connect = await dbInitialize()
    const clientRepo = await connect.getRepository(Client)
    const clientData = await clientRepo.find({
        select: ["id", "name", "password"],
        where: {
            "name" : name,
            "password": password
        }
    })
    if (clientData.length === 0)
        return 404
    return clientData[0]
}

export async function findClientById(id: number) {
    const connect = await dbInitialize()
    const clientRepo = await connect.getRepository(Client)
    const clientData = await clientRepo.find({
        select: ["id", "name", "password"],
        where: {
            "id" : id
        }
    })
    if (clientData.length === 0)
        return 404
    return clientData[0]
}