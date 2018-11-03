import express = require('express');
import {App} from './App';
import {Posts} from "./Posts/Posts";
import {Authentication} from "./Authentication/Authentication";
require('dotenv').config();

let app = express();

new App(app, 3333).boot();