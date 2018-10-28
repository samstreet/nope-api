import PostServiceInterface from "./Interfaces/PostServiceInterface"
import { injectable, inject } from "inversify";
import "reflect-metadata";
import TYPES from "../../Core/core.types";
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
        @inject(TYPES.PostRepository) PostRepositoryInterface: PostRepositoryInterface,
    )
    {
        this.repo = PostRepositoryInterface;
    }

    public test(){
        console.log(this.repo.getModel().getSchema());
    }

}
