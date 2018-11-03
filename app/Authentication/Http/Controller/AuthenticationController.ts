import express = require("express");
import container from "../../../inversify.config";
import AUTHENTICATION_TYPES from "../../authentication.types";

const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {

    let service = container.get(AUTHENTICATION_TYPES.AuthenticationService);
    console.log(service);

    res.append('Content-Type', "application/json");
    res.send({auth: "index"});
});

router.post('/token', (req: express.Request, res: express.Response) => {
    let {name} = req.params;

    res.append('Content-Type', "application/json");
    res.send({post: "auth"});
});

export const AuthenticationController: express.Router = router;