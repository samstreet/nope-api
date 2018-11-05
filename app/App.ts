import express = require('express');
import RequestLogger = require("./Core/Http/Middleware/RequestLogger");
import CORS = require("./Core/Http/Middleware/CORS");
import VerifyToken = require("./Authentication/Http/Middleware/VerifyToken");
import {CoreController} from './Core/Http/Controller';
import {PostService} from "./Posts/Services";
import {Posts} from "./Posts/Posts";
import {Authentication} from "./Authentication/Authentication";

export class App implements BootableService{

    constructor(private app: express.Express, private port: number) {
        this.configureMiddleware(app);
        this.configureRoutes(app);
    }

    /**
     * @param app - express application
     */
    protected configureMiddleware(app: express.Express) {
        app.use(CORS);
        app.use(RequestLogger);
    }

    /**
     * @param app - express application
     */
    protected configureRoutes(app: express.Express) {
        app.use("/", CoreController);
    }

    boot(): void {
        new Posts(this.app, this.port).boot();
        new Authentication(this.app, 4444).boot();
    }

}
