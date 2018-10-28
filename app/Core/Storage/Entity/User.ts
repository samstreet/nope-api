import {injectable} from "inversify";
import {Schema} from "mongoose";
import "reflect-metadata";

export interface IUserModel {
    fullName(): string;
}

@injectable()
export class UserSchema extends Schema implements IUserModel {

    constructor({name: {type:String}}){
        super({name: {type:String}});
    }

    fullName(): string {
        return "Hello";
    }

}