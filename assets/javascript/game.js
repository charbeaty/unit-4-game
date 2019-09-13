//Random number (between 19-120) appears here. Changes at start of new game
var total = "";
var wins = 0;
var losses = 0;

console.log(total);
var crystalNumber = Math.floor(Math.random() *12) + 1;
$("#crystal").append(crystalNumber);
console.log(crystalNumber);

var randomNumber = Math.floor(Math.random() *120) + 19;
$("#random").text(randomNumber);
console.log(randomNumber);

//each crystal needs to have a different number (between 1-12) when clicked


$(document).ready(function() {
//set crystal values on page load
var crystal = $("#crystal");


//store values inside teh data attribute of the element
$("#crystal").attr("data-value", crystalNumber);


$(".crystal-image").on('click', function() {
    
  var crystalValue = ($(this).attr("data-value"));
  crystalValue = parseInt(crystalValue);

  var crystalNumber = Math.floor(Math.random() *12) + 1;
$("#crystal").append(crystalNumber);
console.log(crystalNumber);

  total += crystalValue;

   if (total === randomNumber){
   wins++;
//restart game
}
if ( total !== randomNumber){
losses--;
//restart game
}

});

$("#your-total").text(total);
$("#your-wins").text(wins);
$("#your-losses").text(losses);
});