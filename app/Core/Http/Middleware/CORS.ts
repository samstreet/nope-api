import express = require("express");

let CORS: express.RequestHandler = (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
) => {

    response.append('Access-Control-Allow-Credentials', "true");
    response.append('Access-Control-Allow-Origin', request.headers.origin);
    response.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    response.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (request.method === 'OPTIONS') {
        response.send(200);
    }

    next();
};

export = CORS;