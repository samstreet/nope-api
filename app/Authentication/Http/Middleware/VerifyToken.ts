import express = require("express");
import jwt = require('express-jwt');

let VerifyToken: express.RequestHandler = (request: express.Request, response: express.Response, next: express.NextFunction) => {

    jwt.getToken();

    next();
};

export = VerifyToken;