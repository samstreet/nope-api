import express = require("express");

const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.append('Content-Type', "application/json");
    res.send({auth: "index"});
});

router.post('/token', (req: express.Request, res: express.Response) => {
    let {name} = req.params;

    res.append('Content-Type', "application/json");
    res.send({post: "auth"});
});

export const AuthenticationController: express.Router = router;