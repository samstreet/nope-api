import express = require('express');
import RequestLogger = require("./Core/Http/Middleware/RequestLogger");
import CORS = require("./Core/Http/Middleware/CORS");
import VerifyToken = require("./Authentication/Http/Middleware/VerifyToken");
import {CoreController} from './Core/Http/Controller';
import {PostController} from './Posts/Http/Controller';
import {AuthenticationController} from "./Authentication/Http/Controller/AuthenticationController";

export class App {

    constructor(private app: express.Express, private port: number) {
        this.configureMiddleware(app);
        this.configureRoutes(app);
    }

    public run() {
        this.app.listen(this.port);
    }

    /**
     * @param app - express application
     */
    protected configureMiddleware(app: express.Express) {
        app.use(CORS);
        app.use(RequestLogger);
        app.use(VerifyToken);
    }

    /**
     * @param app - express application
     */
    protected configureRoutes(app: express.Express) {
        app.use("/", CoreController);
        app.use("/authentication/", AuthenticationController);
        app.use("/posts/", PostController);
    }

}
