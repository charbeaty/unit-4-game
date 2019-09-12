//Random number (between 19-120) appears here. Changes at start of new game
var targetNumber = Math.floor(Math.random() *120) + 19;
$("#random").text(targetNumber);
console.log(targetNumber);

//each crystal needs to have a different number (between 1-12) when clicked
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (var i = 0; i < numberOptions.length; i++) {

}



var totalScore = 0;
var wins = 0;
var losses = 0;

$("#crystal-image").on("click", function() {
    //pull from numberOptions to get value
totalScore += 1;
//apply to total score
})
//make startGame function
//total score added here 
//keep track of losses
//keep track of wins
