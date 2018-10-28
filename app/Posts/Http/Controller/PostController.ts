import express = require("express");
import container from "../../../inversify.config";
import TYPES from "../../../Core/core.types";
import PostServiceInterface from "../../Services/Interfaces/PostServiceInterface";
import * as log from 'loglevel';

const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.append('Content-Type', "application/json");
    res.send({post: "index"});
});

router.get('/:name', (req: express.Request, res: express.Response) => {
    let {name} = req.params;

    let service = container.get<PostServiceInterface>(TYPES.PostService);
    log.info(service.test());

    res.append('Content-Type', "application/json");
    res.send({post: "test"});
});

export const PostController: express.Router = router;