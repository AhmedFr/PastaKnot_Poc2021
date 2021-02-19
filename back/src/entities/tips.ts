import {Entity, Column, PrimaryColumn, BaseEntity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Tip extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    idClient: number;

    @Column()
    title: string;

    @Column()
    category: string;

    @Column()
    date: number[];

    @Column()
    likes: number;

    @Column()
    content: string;

    constructor(name: string,  idClient: number, content: string, date: number[], title: string, category: string, likes: number) {
        super(),
            this.idClient = idClient,
            this.title = title,
            this.category = category,
            this.content= content,
            this.date = date,
            this.likes = likes
    }
}