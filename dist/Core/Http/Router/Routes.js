"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Routes {
    constructor() {
        this.routes = [
            {
                uri: '/',
                path: 'root',
                methods: ['get']
            }
        ];
    }
    registerRoutes() {
        this.routes.forEach((route) => {
            express.router[method](route.uri, function (req, res) {
                // Automatically 404 if the `route.path` doesn't exist
                console.error(e);
                require(routesDir + 'errors')['404'](req, res, route.path);
                return;
            });
        });
    }
}
exports.default = new Routes();
//# sourceMappingURL=Routes.js.map