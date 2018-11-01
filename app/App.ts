import express = require('express');
import RequestLogger = require("./Core/Http/Middleware/RequestLogger");
import CORS = require("./Core/Http/Middleware/CORS");
import VerifyToken = require("./Authentication/Http/Middleware/VerifyToken");
import {CoreController} from './Core/Http/Controller';

export class App implements BootableService{

    constructor(private app: express.Express, private port: number) {
        this.configureMiddleware(app);
        this.configureRoutes(app);
    }

    public run() {
        this.boot();
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
    }

    boot(): void {
        this.app.listen(this.port);
    }

}
