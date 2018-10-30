import "reflect-metadata";
import {injectable} from "inversify";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {PostInterface} from "./Interfaces/PostInterface";

@injectable()
@Entity()
export class PostEntity implements PostInterface {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    created_at: Date;

}
