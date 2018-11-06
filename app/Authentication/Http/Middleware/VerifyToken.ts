import * as express from "express";
const jwt = require('jsonwebtoken');

let VerifyToken: express.RequestHandler = (request: express.Request, response: express.Response, next: express.NextFunction) => {

    let token = null;
    if (request.headers.authorization && request.headers.authorization.split(' ')[0] === 'Bearer') {
        token = request.headers.authorization.split(' ')[1];
    } else if (request.query && request.query.token) {
        token = request.query.token;
    }
    
    try{
        jwt.verify(token, 'supersecret', (err, decoded) => { if (err) throw err; });
    } catch(err){
        response.setHeader('Content-Type', 'application/json');
        response.status(401).send({error: "Unathorised User"});
    }
    
    next();
};

export = VerifyToken;