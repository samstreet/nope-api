"use strict";
const express_1 = require("express");
class CustomerRouter extends express_1.Router {
    constructor() {
        super();
        this.register();
    }
    register() {
        super.get('/', (request, response) => {
            let testData = {
                firstName: "The",
                lastName: "Burge"
            };
            response.append("Content-Type", "application/json");
            response.send(testData);
        });
    }
}
module.exports = CustomerRouter;
//# sourceMappingURL=Routes.js.map