import express = require('express');
import {App} from './App';
import config from "./application.config";

let api = new App(express(), config.LISTEN_PORT);
api.run();