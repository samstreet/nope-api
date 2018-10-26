import express = require('express');
import RequestLogger = require("./Core/Http/Middleware/RequestLogger");
import CORS = require("./Core/Http/Middleware/CORS");
import {CoreController} from './Core/Http/Controller';
import {PostController} from './Posts/Http/Controller';

export class App {

    constructor(private app: express.Express, private port: number) {
        this.configureRoutes(app);
        this.configureMiddleware(app);
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
    }

    /**
     * @param app - express application
     */
    protected configureRoutes(app: express.Express) {
        app.use("/", CoreController);
        app.use("/posts/", PostController);
    }

}
