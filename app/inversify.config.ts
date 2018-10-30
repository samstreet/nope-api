import {Container} from "inversify";
import POST_TYPES from "./Posts/posts.types";
import {PostRepository} from "./Posts/Storage/Repository/PostRepository";
import PostRepositoryInterface from "./Posts/Storage/Repository/Interfaces/PostRepositoryInterface";
import "reflect-metadata";
import {PostInterface} from "./Posts/Storage/Entity/Interfaces/PostInterface";
import PostServiceInterface from "./Posts/Services/Interfaces/PostServiceInterface";
import {PostService} from "./Posts/Services";
import {PostEntity} from "./Posts/Storage/Entity/Post";

const container = new Container();
container.bind<PostRepositoryInterface>(POST_TYPES.PostRepository).to(PostRepository);
container.bind<PostInterface>(POST_TYPES.PostEntity).to(PostEntity);
container.bind<PostServiceInterface>(POST_TYPES.PostService).to(PostService);

export default container;