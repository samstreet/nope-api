import express = require('express');
import jwt = require('express-jwt');
import {AuthenticationController} from "./Http/Controller/AuthenticationController";
import VerifyToken = require("./Http/Middleware/VerifyToken");

export class Authentication implements BootableService{

    constructor(private app: express.Express, private port: number) {
        this.configureMiddleware(app);
        this.configureRoutes(app);
    }

    boot(): void {
        this.app.listen(this.port);
    }

    /**
     * @param app - express application
     */
    protected configureMiddleware(app: express.Express) {
        this.app.use(VerifyToken);
    }

    /**
     * @param app - express application
     */
    protected configureRoutes(app: express.Express) {
        app.use("/authentication/", AuthenticationController);
    }

}