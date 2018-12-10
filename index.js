var inquirer = require("inquirer");
var Word = require("./word.js");
var fs = require("fs");

function playGame() {

    // use FS to read the guesswords.txt file
    fs.readFile('./guesswords.txt', 'utf8', function read(err, data) {

        if (err) {
            throw err;
        }

