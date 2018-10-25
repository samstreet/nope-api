import express = require("express");

const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.append('Content-Type', "application/json");
    res.send({hello: "world"});
});

export const CoreController: express.Router = router;