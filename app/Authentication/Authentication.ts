import express = require('express');
import jwt = require('express-jwt');
import {AuthenticationController} from "./Http/Controller/AuthenticationController";

export class Authentication implements BootableService{

    constructor(private app: express.Express, private port: number) {
        this.configureMiddleware(app);
        this.configureRoutes(app);
    }

    boot(): void {

        this.app.use(jwt({
            secret: process.env.JWT_SECRET,
            credentialsRequired: false,
            getToken: function fromHeaderOrQuerystring (req) {
                if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
                    return req.headers.authorization.split(' ')[1];
                } else if (req.query && req.query.token) {
                    return req.query.token;
                }
                return null;
            }
        }));

        this.app.listen(this.port);
    }

    /**
     * @param app - express application
     */
    protected configureMiddleware(app: express.Express) {}

    /**
     * @param app - express application
     */
    protected configureRoutes(app: express.Express) {
        app.use("/authentication/", AuthenticationController);
    }

}