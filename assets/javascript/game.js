$(document).ready(function () {
    //create global variables 
    var gameWins = 0;
    var gameLosses = 0;
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

    //shows wins, losses, and total score at set variable 
    $("#winCount").text("Wins:" + gameWins);
    $("#lossesCount").text("Losses:" + gameLosses);
    $("#randomScore").text("Random Score:" + randomScore);
    $("#totalScore").text("Total Score:" + totalScore);

    //win and lose functions created and a reset function

    function reset() {
        randomScore = Math.floor((Math.random() * 100) + 20)
        crystalAmethyst = Math.floor((Math.random() * 12) + 1)
        crystalEmerald = Math.floor((Math.random() * 12) + 1)
        crystalMajestic = Math.floor((Math.random() * 12) + 1)
        crystalSilver = Math.floor((Math.random() * 12) + 1)
        totalScore = 0;
        $("#totalScore").text("Total Score:" + totalScore);
        $("#randomScore").text(randomScore);

    }
    console.log(reset);

    function win() {
        $("#win-lose").text("You Win!");
        gameWins++;
        $("#winCount").text("Wins:" + gameWins);
        reset();
    }

    function lose() {
       $("#win-lose").text("You Lose!");
        gameLosses++;
        $("#lossesCount").text("Losses:" + gameLosses);
        reset();
    }

    //adding the random crystal numbers to total score 


    $("#amethyst").on("click", function () {
        totalScore = totalScore + crystalAmethyst;
        $("#totalScore").text("Total Score:" + totalScore)
        if (totalScore == randomScore) {
            win();
        }
        else if (totalScore > randomScore) {
            lose();
        }
    });

    $("#emerald").on("click", function () {
        totalScore = totalScore + crystalEmerald;
        $("#totalScore").text("Total Score:" + totalScore)
        if (totalScore == randomScore) {
            win();
        }
        else if (totalScore > randomScore) {
            lose();
        }
    });

    $("#majestic-blue").on("click", function () {
        totalScore = totalScore + crystalMajestic;
        $("#totalScore").text("Total Score:" + totalScore)
        if (totalScore == randomScore) {
            win();
        }
        else if (totalScore > randomScore) {
            lose();
        }
    });

    $("#silver-night").on("click", function () {
        totalScore = totalScore + crystalSilver;
        $("#totalScore").text("Total Score:" + totalScore)
        if (totalScore == randomScore) {
            win();
        }
        else if (totalScore > randomScore) {
            lose();
        }
    });

});