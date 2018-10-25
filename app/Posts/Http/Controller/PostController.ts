import express = require("express");

const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.append('Content-Type', "application/json");
    res.send({post: "index"});
});

router.get('/:name', (req: express.Request, res: express.Response) => {
    let { name } = req.params;

    res.append('Content-Type', "application/json");
    res.send({post: "name"});
});

export const PostController: express.Router = router;