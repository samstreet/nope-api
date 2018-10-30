import {injectable} from "inversify";
import "reflect-metadata";
import {Entity} from "typeorm";
import {UserEntityInterface} from "./Interfaces/UserEntityInterface";

@injectable()
@Entity()
export class User implements UserEntityInterface {


}