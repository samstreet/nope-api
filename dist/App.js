"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestLogger = require("./Core/Http/Middleware/RequestLogger");
const CORS = require("./Core/Http/Middleware/CORS");
const Controller_1 = require("./Core/Http/Controller");
const Controller_2 = require("./Posts/Http/Controller");
class App {
    constructor(app, port) {
        this.app = app;
        this.port = port;
        this.configureRoutes(app);
        this.configureMiddleware(app);
    }
    /**
     * @param app - express application
     */
    configureMiddleware(app) {
        app.use(CORS);
        app.use(RequestLogger);
    }
    /**
     * @param app - express application
     */
    configureRoutes(app) {
        app.use("/", Controller_1.CoreController);
        app.use("/posts/", Controller_2.PostController);
    }
    run() {
        this.app.listen(this.port);
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map