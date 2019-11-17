/*

Pick a random word.

While the word has not yet been guessed {
  Show the play their current progress
  Get a guess from the player

  If the player wants to quit the game {
    Quit the game.
  }
  Else If the guess is not a singe letter {
    Tell the player to pick a single letter.
  }
  Else {
    If the guess is in the word {
      Update the player's progress with the guess.
    }
  }
}

Congratulate the player on guessing the word.

*/

var words = [
  "javascript",
  "monkey",
  "amazing",
  "pancake",
  "money",
  "sport"
];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

// Game code
var remainingLetters = word.length;
while (remainingLetters > 0) {
  // Show player progress
  alert(answerArray.join(" "))
  // take input from player
  var guess = prompt("Guess a letter, or click Cancel to stop playing.");
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter");
  } else {
    // Update the game state with the guess
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        // update answerArray and remainingLetter for every correct guess.
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}

alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
