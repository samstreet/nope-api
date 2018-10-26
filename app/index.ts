import express = require('express');
import {App} from './App';

new App(express(), 3333).run();