import PostRepositoryInterface from "./Interfaces/PostRepositoryInterface";
import * as mongoose from 'mongoose';
import {inject, injectable} from "inversify";
import "reflect-metadata";
import TYPES from "../../../Core/core.types";
import {PostInterface} from "../Entity/Post";

@injectable()
export class PostRepository implements PostRepositoryInterface {

    private post;

    constructor(
        @inject(TYPES.PostEntity) PostEntityInterface: PostInterface,
    ){
        this.post = PostEntityInterface;
    }

    foo(){
        return "Hello";
    }

    getModel(): mongoose.Schema {
        return this.post;
    }

}