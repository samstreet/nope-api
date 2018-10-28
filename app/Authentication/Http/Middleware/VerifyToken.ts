import express = require("express");
import * as log from 'loglevel';

let VerifyToken: express.RequestHandler = (request: express.Request, response: express.Response, next: express.NextFunction) => {
    log.info("VerifyToken");

    next();
};

export = VerifyToken;