"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const App_1 = require("./App");
let api = new App_1.App(express(), 3333);
api.run();
//# sourceMappingURL=index.js.map