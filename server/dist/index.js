"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var learn_to_code_1 = require("./server/learn-to-code");
var Learn2Code = new learn_to_code_1.LearnToCode();
Learn2Code
    .configure()
    .start()
    .then(console.log)
    .catch(console.error);
