
$(document).ready(function () {
    var total = 0;
    var wins = 0;
    var losses = 0;

    $("#your-total").text(total);
    $("#your-wins").text(wins);
    $("#your-losses").text(losses);

    var crystalNumber1 = randomNumberHelper(1);
    var crystalNumber2 = randomNumberHelper(1);
    var crystalNumber3 = randomNumberHelper(1);
    var crystalNumber4 = randomNumberHelper(1);
    var randomNumber = randomNumberHelper(2);

    function randomNumberHelper(type) {
        if (type === 1) {

            var radnomGenNumber = Math.floor(Math.random() * 12) + 1;
            return radnomGenNumber;
        }
        if (type === 2) {

            var radnomGenNumber = Math.floor(Math.random() * (120 - 19) + 19);
            return radnomGenNumber;
        }
    }
    // putting the radnom number of the screen
    $("#random").text(randomNumber);
    // console.log(crystalNumber1, crystalNumber2, crystalNumber3, crystalNumber4, randomNumber);

    $(".crystal-image").on('click', function () {

        var clicked = $(this).attr("id");
        //debugger
        if (clicked === "crystal1") {
            total = total + crystalNumber1;
        }
        if (clicked === "crystal2") {
            total = total + crystalNumber2;
        }
        if (clicked === "crystal3") {
            total = total + crystalNumber3;
        }
        if (clicked === "crystal4") {
            total = total + crystalNumber4;
        }

        $("#your-total").text(total);

        if (total === randomNumber) {
            wins++;
            winLossUpdate();
            reset();
        }
        if (total > randomNumber) {
            losses++;
            winLossUpdate();
            reset();
        }

    });
    function reset() {
        total = 0;
        crystalNumber1 = randomNumberHelper(1);
        crystalNumber2 = randomNumberHelper(1);
        crystalNumber3 = randomNumberHelper(1);
        crystalNumber4 = randomNumberHelper(1);
        randomNumber = randomNumberHelper(2);
        $("#random").text(randomNumber);
        $("#your-total").text(total);

    }

    function winLossUpdate() {
        $("#your-total").text(total);
        $("#your-wins").text(wins);
        $("#your-losses").text(losses);
    };
});