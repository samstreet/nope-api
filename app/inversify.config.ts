import { Container } from "inversify";
import TYPES from "./Core/core.types";
import {PostRepository} from "./Posts/Storage/Repository/PostRepository";
import PostRepositoryInterface from "./Posts/Storage/Repository/Interfaces/PostRepositoryInterface";
import "reflect-metadata";
import {PostEntity, PostInterface} from "./Posts/Storage/Entity/Post";
import PostServiceInterface from "./Posts/Services/Interfaces/PostServiceInterface";
import {PostService} from "./Posts/Services";

const container = new Container();
container.bind<PostRepositoryInterface>(TYPES.PostRepository).to(PostRepository);
container.bind<PostInterface>(TYPES.PostEntity).to(PostEntity);
container.bind<PostServiceInterface>(TYPES.PostService).to(PostService);

export default container;