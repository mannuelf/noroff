generateRandomInsult = function () {
  var randomBodyParts = ["Face", "Nose", "Hair"];
  var randomAdjectives = ["Smelly", "Boring", "Stupid"];
  var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

  var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
  }

  var randomInsult = "Your " +
    pickRandomWord(randomBodyParts) + " is like a " +
    pickRandomWord(randomAdjectives) + " " +
    pickRandomWord(randomWords) + "!!!";

    return randomInsult;
}

generateRandomInsult();
console.log(generateRandomInsult())
