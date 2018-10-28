import express = require("express");
import container from "../../../inversify.config";
import PostRepositoryInterface from "../../Storage/Repository/Interfaces/PostRepositoryInterface";
import TYPES from "../../../Core/core.types";

const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.append('Content-Type', "application/json");
    res.send({post: "index"});
});

router.get('/:name', (req: express.Request, res: express.Response) => {
    let {name} = req.params;

    let service = container.get<PostRepositoryInterface>(TYPES.PostRepository);

    res.append('Content-Type', "application/json");
    res.send({post: service.foo()});
});

export const PostController: express.Router = router;