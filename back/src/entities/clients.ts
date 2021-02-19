import {Entity, Column, PrimaryColumn, BaseEntity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Client extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    name: string;

    @Column()
    password: string;

    constructor(name: string, password: string) {
        super(),
        this.name = name,
        this.password = password
    }
}