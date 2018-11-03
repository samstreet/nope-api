import express = require('express');
import {App} from './App';
import {Posts} from "./Posts/Posts";
import {Authentication} from "./Authentication/Authentication";

let app = express();

new Posts(app, 4444).boot();
new Authentication(app, 5555).boot();
new App(app, 3333).run();