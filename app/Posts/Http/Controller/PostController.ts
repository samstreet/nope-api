import express = require("express");

const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello, World!');
});

router.get('/:name', (req: express.Request, res: express.Response) => {
    let { name } = req.params;

    res.append('Content-Type', "application/json");
    res.send({hello: "world"});
});

export const CoreController: express.Router = router;