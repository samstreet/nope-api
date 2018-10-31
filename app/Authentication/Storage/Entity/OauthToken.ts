import "reflect-metadata";
import {AbstractEntity} from "../../../Core/Storage/Entity/AbstractEntity";
import {Entity} from "typeorm";
import {injectable} from "inversify";

@injectable()
@Entity()
export default class OauthToken extends AbstractEntity {

    /**
     * @return string
     */
    private _token: string;

    get token(): string {
        return this._token;
    }

}