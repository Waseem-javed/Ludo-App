// first we need to declare a variables with advanced functionality

var scores, roundScore, activeplayer,gamePlaying,lastDice;

init();
function init() {
    scores = [0, 0];
    roundScore = 0;
    activeplayer = 0;
    gamePlaying = true;

    // DOM CURRENT SCORES SHOULD BE ZERO FOR THAT BELOW CODE USE
    document.querySelector("#score-0").textContent = 0;
    document.querySelector("#score-1").textContent = 0;
    document.querySelector("#current-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;

    document.querySelector("#dice-1").style.display = "none";
    document.querySelector("#dice-2").style.display = "none";

    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "PLayer 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}




document.querySelector(".btn-roll").addEventListener('click', function () {
    if (gamePlaying) {
        // first Random number generate
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        // Display the result with correct dice number
        // var diceDome = document.querySelector(".dice");
        // diceDome.style.display = "block";
        // diceDome.src = "dice-" + dice + ".png";

        document.getElementById("dice-1").style.display =
            "block";
        document.getElementById("dice-2").style.display =
            "block";
        document.getElementById("dice-1").src =
            "dice-" + dice1 + ".png";
        document.getElementById("dice-2").src =
            "dice-" + dice2 + ".png";

        // Update the round score if the roll no is not 1
        if (dice1 !== 1 && dice2 !== 1) {
            // if dice score greater then 1 add score
            roundScore += dice1+dice2;
            document.querySelector(
                "#current-" + activeplayer
            ).textContent = roundScore;
        } else {
            // NextPLayer
            nextPLayer();
        }
        // if (dice === 6 && lastDice === 6) {
        //     scores[activeplayer] = 0;
        //     document.querySelector("#score-" + activeplayer).textContent = '0';
        //     nextPLayer();
        // }else if (dice !== 1) {
        //     // if dice score greater then 1 add score
        //     roundScore += dice;
        //     document.querySelector(
        //         "#current-" + activeplayer
        //     ).textContent = roundScore;
        // } else {
        //     // NextPLayer
        //     nextPLayer();
        // }lastDice = dice;
    }
});

// hold btn functionality
document.querySelector('.btn-hold').addEventListener('click', function () {

    // if the game is not win thn do this
    if (gamePlaying) {
        // current score and to global score
        scores[activeplayer] += roundScore;
        // thn display in the DOM
        document.querySelector(
            "#score-" + activeplayer
        ).textContent = scores[activeplayer];

        // Check if player won the game
        // from user set winning score below code
        var input = document.querySelector(".final-score").value;

        if (input) {
            var winScore = input;
        }
        else {
            winScore = 100;
        }

        if (scores[activeplayer] >= winScore) {
            document.querySelector(
                "#name-" + activeplayer
            ).textContent = "Winner!";
            document.querySelector("#dice-1").style.display =
                "none";
            document.querySelector("#dice-2").style.display = "none";
            document
                .querySelector(".player-" + activeplayer + "-panel")
                .classList.add("winner");
            document
                .querySelector(".player-" + activeplayer + "-panel")
                .classList.remove("active");
            gamePlaying = false;
        } else {
            // nextplayer
            nextPLayer();
        }
    }
    
})

function nextPLayer() {
    // nextplayer code
    activeplayer === 0 ? (activeplayer = 1) : (activeplayer = 0);

    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    // document.querySelector(".player-0-panel").classList.remove("active");
    // document.querySelector(".player-1-panel").classList.add("active");

    // by toggle doing change the classes in html DOM

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector("#dice-1").style.display = "none";
    document.querySelector("#dice-2").style.display = "none";
}

document.querySelector('.btn-new').addEventListener('click',init);