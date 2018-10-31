import {Column} from "typeorm";

export abstract class AbstractEntity {

    @Column()
    id: number;

    @Column()
    creationDate: Date;

    @Column()
    modifiedDate: Date;

}
