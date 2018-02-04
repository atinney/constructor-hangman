// create an array of words to play with
// pick a random word
// pass the word to a constructor
// constructor properties:
//   - word to be guessed 
//   - guesses remaining (length of word)
//   - method to create the secret word array of "-"
//   - method to find a letter in the original word, use that ID to replace the same index in the secret word with the letter
//   - prototype to print the word

// function to take in a letter from inquirer and run your already written hangman logic


// dependency for inquirer npm package
var inquirer = require("inquirer");

// array of words
var words = ["ocean","ship","helm","deck","sail","wind","keel","rudder","captain"];

// global variable to store the chosen word
var chosenWord = "";
var workingWord = [];
var temp = 0;
var guessedLetterArray = [];
var guessesLimit = 0;

// constructor function used to create the word to be played
function secretWord(word) {
  this.word = word;

  // creates an array of "-" representing the number of spaces for the secret word
  this.createWorkingWord = function(){
    workingWord = word.split("");
    for(var key in workingWord) {
        workingWord[key] = "-";
      }
    //set the number of guesses left
    guessesLeft = workingWord.length;
  };

  // prints whatever is in the working word
  this.printWord = function(){
    console.log(workingWord.toString());
  };

  this.updateWord = function(letter){
    for (i=0; i < workingWord.length; i++) {
      if (workingWord[i] == letter) {
        workingWord[i] = letter;
      }
    }
  };
}

// // * `printWord`: Prototype which prints out the word
// secretWord.prototype.printWord = function() {
  
// };



function pickSecretWord () {
  // Generate a random number between 0 and the length of the words array
  var randomWordID =  Math.floor(Math.random()*(words.length)+0);

  // Get the word that's at that index and store it in the global variable for chosenWord
  chosenWord = words[randomWordID];
}


function initializeFirstGame () {
  //picks new word
  pickSecretWord();

  //creates a new object with the word chosen
  var wordObject = new secretWord(chosenWord);
  wordObject.createWorkingWord();
  wordObject.printWord();
}


var playGame = function() {

  // if statement to check whether user has won yet or not
  if (temp < workingWord.length) {
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "letter",
        message: "Guess a letter: "
      }
    ]).then(function(guessedLetter) {
      wordObject.updateWord(guessedLetter.letter);
      temp++;
      playGame();
    });
  }
  else {
    console.log("You're done with this word!");
    //picks new word
    pickSecretWord();

    //creates a new object with the word chosen
    var wordObject = new secretWord(chosenWord);
    wordObject.createWorkingWord();
    wordObject.printWord();
  }

};

initializeFirstGame();
playGame();

// wordObject.createSecretWord();
// wordObject.printWord();