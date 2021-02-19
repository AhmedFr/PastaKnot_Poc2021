import {Entity, Column, PrimaryColumn, BaseEntity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Comment extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    idTip: number;

    @Column()
    idClient: number;

    @Column()
    content: string;

    @Column()
    date: number[];

    constructor(name: string, idTip: number, idClient: number, content: string, date: number[]) {
        super(),
            this.idTip = idTip,
            this.idClient = idClient,
            this.content= content,
            this.date= date
    }
}