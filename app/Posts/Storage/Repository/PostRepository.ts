import {inject, injectable} from "inversify";
import "reflect-metadata";
import POST_TYPES from "../../../Posts/posts.types";
import {PostInterface} from "../Entity/Interfaces/PostInterface";
import PostRepositoryInterface from "./Interfaces/PostRepositoryInterface";
import {AbstractEntity} from "../../../Core/Storage/Entity/AbstractEntity";

@injectable()
export class PostRepository implements PostRepositoryInterface {

    /**
     * @param {PostInterface} PostEntityInterface
     */
    private post;

    /**
     * @param PostEntityInterface
     */
    constructor(
        @inject(POST_TYPES.PostEntity) PostEntityInterface: PostInterface,
    ) {
        this.post = PostEntityInterface;
    }

    /**
     *
     */
    getModel(): AbstractEntity {
        return this.post
    }

}
