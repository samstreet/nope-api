import PostServiceInterface from "./Interfaces/PostServiceInterface"
import {inject, injectable} from "inversify";
import "reflect-metadata";
import POST_TYPES from "../../Posts/posts.types";
import PostRepositoryInterface from "../Storage/Repository/Interfaces/PostRepositoryInterface";

@injectable()
export class PostService implements PostServiceInterface {

    /**
     * @param PostRepositoryInterface
     */
    private repo;

    /**
     * @param PostRepositoryInterface
     */
    constructor(
        @inject(POST_TYPES.PostRepository) PostRepositoryInterface: PostRepositoryInterface,
    ) {
        this.repo = PostRepositoryInterface;
    }

    public test() {
        console.log(this.repo.getModel());
    }

}
