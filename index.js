var inquirer = require("inquirer");
var Word = require("word.js");
var fs = require("fs");

function playGame() {

    // use FS to read the guesswords.txt file
    fs.readFile("wordslist.txt", "utf8", function read(err, data) {

        if (err) {
            throw err;
        }
// getting words from wordlist.txt
        wordsArray = data.split('\n');
        console.log(wordsArray);
        var randomNum = Math.floor(Math.random() * wordsArray.length) + 1;
        console.log(randomNum)
        var word = new Word(randomLine);
        console.log(word);
        word.makeWordArray();
        console.log(word.wordArray);
        word.makeWordString();
        console.log(word.wordString + '\n');
        gamePlay(word, 12);
    });
};
// GAMEPLAY
function gamePlay(word, guesses){
    inquirer .prompt({
        name:  "Letter",
        type: "input",
        message: "Guess a letter!"
    })
    .then (function(answer){
        word.checkAnswer(answer.letter);
        console.log (answer.letter);
        var matched=[];
        for(i=0; i<word.wordArray.lenghtl i++){
            var matched;
            if (word.wordArray[i].character===answer.letter){
                matched = true;
            }else{
                matched=false;
            }
            matched.push(matched);
            }
            if(matched.includes(true)){
                console.log ("YAY!");
            } else{
                guesses=guesses-1;
            }
            if(guesses<1){
                console.log ("Sorry, your're out of turns!");
                anotherGame()
            }
}