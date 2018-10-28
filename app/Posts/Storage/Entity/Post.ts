import {Schema} from 'mongoose';
import "reflect-metadata";
import {injectable} from "inversify";

export interface PostInterface {
    getTitle(): string;
    getSchema(): Schema;
}

@injectable()
export class PostEntity implements PostInterface{

    private PostSchema;
    
    constructor(){
        this.PostSchema = new Schema({
            title: {type:String, required: true},
        });
    }

    getTitle(): string {
        return this.PostSchema.title;
    }

    getSchema(): Schema {
        return this.PostSchema;
    }

}