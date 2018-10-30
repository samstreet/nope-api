import {inject, injectable} from "inversify";
import "reflect-metadata";
import TYPES from "../../../Core/core.types";
import {PostInterface} from "../Entity/Interfaces/PostInterface";
import PostRepositoryInterface from "./Interfaces/PostRepositoryInterface";

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
        @inject(TYPES.PostEntity) PostEntityInterface: PostInterface,
    ) {
        this.post = PostEntityInterface;
    }

    /**
     *
     */
    getModel() {
        return this.post
    }


}