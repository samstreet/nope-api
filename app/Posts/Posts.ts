import express = require('express');
import {PostController} from "./Http/Controller";

export class Posts implements BootableService {

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
    protected configureMiddleware(app: express.Express) {}

    /**
     * @param app - express application
     */
    protected configureRoutes(app: express.Express) {
        app.use("/posts/", PostController);
    }

}
