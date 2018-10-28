import PostRepositoryInterface from "./Interfaces/PostRepositoryInterface";
import * as mongoose from 'mongoose';
import {injectable} from "inversify";
import "reflect-metadata";

@injectable()
export class PostRepository implements PostRepositoryInterface {

    private readonly post;

    constructor(){
        this.post = Array<Object>();
    }

    foo(){
        return "Hello";
    }

    getModel(): mongoose.Schema {
        return this.post;
    }

}