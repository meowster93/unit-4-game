//create global variables 
var gameWins = 0;
var gameLosses = 0;
var randomScore;
var totalScore = 0;
var randomScore = Math.floor((Math.random() * 100) + 20)
console.log(randomScore);

//created a random number for crystals 1-12
var crystalAmethyst = Math.floor((Math.random() * 12) + 1)
console.log(crystalAmethyst);

var crystalEmerald = Math.floor((Math.random() * 12) + 1)
console.log(crystalEmerald);

var crystalMajestic = Math.floor((Math.random() * 12) + 1)
console.log(crystalMajestic);

var crystalSilver = Math.floor((Math.random() * 12) + 1)
console.log(crystalSilver);


//create functions
//created a random number for the randomScore 19-120


$("#wins").text("Wins:" + gameWins);
$("#losses").text("Losses:" + gameLosses);
$("#totalScore").text("Total Score:" + totalScore)
