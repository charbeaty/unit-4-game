//Random number (between 19-120) appears here. Changes at start of new game
var randomNumber = Math.floor(Math.random() *120) + 19;
$("#random").text(randomNumber);
console.log(randomNumber);

//each crystal needs to have a different number (between 1-12) when clicked
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (var i = 0; i < numberOptions.length; i++) {

var imageCrystal = $("#crystal-image");

imageCrystal.attr("data-crystalvalue", numberOptions[i]);

$("#crystal-image").append(imageCrystal);
}



var totalScore = 0;
var wins = 0;
var losses = 0;

var yourTotal = document.getElementById("your-total");
var yourWins = document.getElementById("your-wins");
var yourLosses = document.getElementById("your-losses");

function startGame(){
    randomNumber.textContent = "";
    yourTotal.textContent = totalScore;
    yourWins.textContent = wins;
    yourLosses.textContent = losses;

}

$("#crystal-image").on("click", function() {
    //pull from numberOptions to get value
var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);

    totalScore += crystalValue;
//apply to total score
if (yourTotal === randomNumber){
    wins++;
    startGame();
}
if (yourTotal !== randomNumber){
    losses++;
    startGame();
}

randomNumber.textContent = "";
yourTotal.textContent = totalScore;
yourWins.textContent = wins;
yourLosses.textContent = losses;
})
//make startGame function
//total score added here 
//keep track of losses
//keep track of wins
