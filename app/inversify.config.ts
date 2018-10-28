import { Container } from "inversify";
import TYPES from "./Core/core.types";
import {PostRepository} from "./Posts/Storage/Repository/PostRepository";
import PostRepositoryInterface from "./Posts/Storage/Repository/Interfaces/PostRepositoryInterface";
import "reflect-metadata";

const container = new Container();
container.bind<PostRepositoryInterface>(TYPES.PostRepository).to(PostRepository);

export default container;