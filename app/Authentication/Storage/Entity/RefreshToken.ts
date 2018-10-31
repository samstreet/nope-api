import "reflect-metadata";
import {AbstractEntity} from "../../../Core/Storage/Entity/AbstractEntity";
import {Entity} from "typeorm";
import {injectable} from "inversify";

@injectable()
@Entity()
export default class RefreshToken extends AbstractEntity {

    /**
     * @return string
     */
    private _token: string;

    /**
     * @return Date
     */
    private _expires_at: Date;

    get token(): string {
        return this._token;
    }

    /**
     * @return Date
     */
    get expires_at(): Date {
        return this._expires_at;
    }
}