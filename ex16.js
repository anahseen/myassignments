// let figlet = require('figlet');
 
// figlet('Hang Man !!', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });

let words = [
    "Barcelona",
    "Milano",
    "London",
    "Rome"
   ];
    let word = words[Math.floor(Math.random() * words.length)];

    let answerArray = [];
  let i = word.length ;
 answerArray[i] = "_";
 console.log(answerArray);

// let remainingLetters = word.length;

// while (remainingLetters > 0) {
//     // Game code goes here
//     // Show the player their progress
//     // Take input from the player
//     // Update answerArray and remainingLetters for every correct guess
//    }
//    let guess = prompt("Guess a letter");
//  if (guess === null) {
//  } else if (guess.length !== 1) {
//  console.log("Please enter a single letter.");
// } else {
//  // Update the game state with the guess
// }

// for (var j = 0; j < word.length; j++) {
//      if (word[j] === guess) {
//      answerArray[j] = guess;
//      remainingLetters--;
//      }
//     }

