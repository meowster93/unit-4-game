//create global variables 
var gameWins = 0;
var gameLosses = 0;
var randomScore;
var crystalAmethyst;
var crystalEmerald;
var crystalMajestic;
var crystalSilver;
var totalScore = 0;


//create functions
//created a random number for the randomScore 19-120
var randomScore = Math.floor((Math.random() *100) +20)
console.log(randomScore);

//created a random number for crystals 1-12
var crystalAmethyst = Math.floor((Math.random() *12) +1)
console.log(crystalAmethyst);

var crystalEmerald = Math.floor((Math.random() *12) +1)
console.log(crystalEmerald);

var crystalMajestic = Math.floor((Math.random() *12) +1)
console.log(crystalMajestic);

var crystalSilver = Math.floor((Math.random() *12) +1)
console.log(crystalSilver);

$("#counterspace").html("wins: " + gameWins);
console.log(gameWins);