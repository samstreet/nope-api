import PostRepositoryInterface from "./Interfaces/PostRepositoryInterface";
import * as mongoose from 'mongoose';
import {PostSchema} from "../Entity/Post";

const Post = mongoose.model('Post', PostSchema);

export class PostRepository implements PostRepositoryInterface {

    private post: mongoose.Model<PostSchema>;

    /**
     * @param post
     */
    constructor(){
        this.post = Post;
    }

    getModel(): mongoose.Schema {
        return this.post;
    }

}