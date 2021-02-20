import {createConnection, Connection} from "typeorm";
import {DB_URL, DB_NAME, ENTITIES_FOLDER, db} from "./appConfig";
import { Comment } from "./entities/comments";
import { Client } from "./entities/clients";
import { Tip } from "./entities/tips";
import { createDatabase } from 'pg-god';

const connectionParameters = {
    type: db.database,
    host: db.host,
    port: db.port,
    username: db.user,
    password: db.password,
    database: DB_NAME,
    entities: [`${__dirname}/entities/*.ts`],
    synchronize: true
}

export async function dbInitialize(): Promise<Connection> {
    console.log(connectionParameters)
    try {
        return  createConnection(connectionParameters)
    } catch (error) {
        if (error.code === '3D000') {
            await createDatabase({ databaseName: DB_NAME }, connectionParameters)
            return dbInitialize()
        }
        throw error
    }
}