
var total = 0;
var wins = 0;
var losses = 0;

$("#your-total").text(total);
$("#your-wins").text(wins);
$("#your-losses").text(losses);

var crystal = $("#crystal");
var crystalNumber = Math.floor(Math.random() * 12) + 1;


var randomNumber = Math.floor(Math.random() * 120) + 19;
$("#random").text(randomNumber);
console.log(randomNumber);




$(document).ready(function () {

    //store values inside the data attribute of the element
    $("#crystal").attr("data-value", crystalNumber);


    $(".crystal-image").on('click', function () {

        var crystalNumber = parseInt($(this).attr("data-crystalNumber"));
        

        total += crystalNumber;

        var crystalNumber = Math.floor(Math.random() * 12) + 1;
        $("#crystal").append(crystalNumber);
        console.log(crystalNumber);



        if (total === randomNumber) {
            wins++;
            total++;
            //restart game
        }
        else if (total >= randomNumber) {
            losses++;
            total++;
            //restart game
        }

    });

    $("#your-total").text(total);
    $("#your-wins").text(wins);
    $("#your-losses").text(losses);

});