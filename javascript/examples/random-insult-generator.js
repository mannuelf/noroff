var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 7)];
var randomWord = randomWords[Math.floor(Math.random() * 4)];

var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";

var pickRandomWord = function(words) {
  return words[Math.floor(Math.random() * words.length)];
}

console.log(pickRandomWord(randomWords))
// console.log(randomInsult);
