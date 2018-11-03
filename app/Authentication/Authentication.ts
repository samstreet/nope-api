import express = require('express');
import {use} from 'typescript-mix';
import {AuthenticationController} from "./Http/Controller/AuthenticationController";

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
    protected configureMiddleware(app: express.Express) {}

    /**
     * @param app - express application
     */
    protected configureRoutes(app: express.Express) {
        app.use("/authentication/", AuthenticationController);
    }

}