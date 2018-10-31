import {injectable} from "inversify";
import "reflect-metadata";
import {Entity} from "typeorm";
import {UserEntityInterface} from "./Interfaces/UserEntityInterface";
import {AbstractEntity} from "./AbstractEntity";

@injectable()
@Entity()
export class User extends AbstractEntity implements UserEntityInterface {


}