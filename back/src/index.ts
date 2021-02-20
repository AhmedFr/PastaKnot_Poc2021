import * as metadata from  'reflect-metadata';
import {Connection} from "typeorm";
import {Client} from "./entities/clients"

import { dbInitialize } from './appDatabase';


async function main () {
    try {
        const connection = await dbInitialize()
        const repo = await connection.getRepository(Client)
        const clients = await repo.find()
        console.log(clients)
    } catch (e) {
        console.log(e);
    }
}

main();