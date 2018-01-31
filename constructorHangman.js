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


// constructor function used to create the word to be played
function secretWord(word) {
  this.word = word;
  this.guessesLeft = guessesLeft;

  // creates an array of "-" representing the number of spaces for the secret word
  this.createSecretWord = function(){
    console.log("This will be a function to create and print a new word with spaces");
  };

}

// * `printWord`: Prototype which prints out the word
// secretWord.prototype.printWord = function() {
//   console.log("");
// };


// var printWord = function() {
//   for(var key in word) {
//         word[key].printStats();
//       }
// }



function pickSecretWord () {
  // Generate a random number between 0 and the length of the words array
  var randomWordID =  Math.floor(Math.random()*(words.length)+0);

  // Get the word that's at that index
  var chosenWord = words[randomWordID];
}


pickSecretWord();