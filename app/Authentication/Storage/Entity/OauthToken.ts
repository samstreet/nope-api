import "reflect-metadata";
import {AbstractEntity} from "../../../Core/Storage/Entity/AbstractEntity";
import {Column, Entity} from "typeorm";
import {injectable} from "inversify";

@injectable()
@Entity()
export default class OauthToken extends AbstractEntity {

    /**
     * @return string
     */
    @Column()
    token: string;

}