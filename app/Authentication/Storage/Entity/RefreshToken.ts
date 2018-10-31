import "reflect-metadata";
import {AbstractEntity} from "../../../Core/Storage/Entity/AbstractEntity";
import {Column, Entity} from "typeorm";
import {injectable} from "inversify";

@injectable()
@Entity()
export default class RefreshToken extends AbstractEntity {

    @Column()
    token: string;

    @Column()
    expires_at: Date;

}