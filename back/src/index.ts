import * as metadata from  'reflect-metadata';
import {Connection, getManager} from "typeorm";
import {Client} from "./entities/clients"
import {createClient, findClient} from "./models/clientModels";

import { dbInitialize } from './appDatabase';


async function main () {
    try {
        const connection = await dbInitialize()
        const repo = await connection.getRepository(Client)
            //const newClient = await createClient('Amoz', '1234', connection)
        const clientData = await findClient('Amoz', '1234', connection)
    } catch (e) {
        console.log(e);
    }
}

main();