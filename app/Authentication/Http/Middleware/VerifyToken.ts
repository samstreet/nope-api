import * as express from "express";
const jwt = require('jsonwebtoken');

let VerifyToken: express.RequestHandler = (request: express.Request, response: express.Response, next: express.NextFunction) => {

    let token = null;
    if (request.headers.authorization && request.headers.authorization.split(' ')[0] === 'Bearer') {
        token = request.headers.authorization.split(' ')[1];
    } else if (request.query && request.query.token) {
        token = request.query.token;
    }

    const x = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', 'secret', (err, decoded) => {
        if (err) throw err;
        console.log(decoded);
    });
    console.log(x);

    next();
};

export = VerifyToken;