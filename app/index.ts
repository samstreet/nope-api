import express = require('express');
import {App} from './App';

let api = new App(express(), 3333);
api.run();