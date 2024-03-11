var gameStatus = "waiting";
var Level = 1;
var newNumber;
var array = [];

function startNewGame() {
    $("h1").text("New Game");
    gameStatus = "crying";
}

function gameOver() {
    $("h1").text("Game Over");
    gameStatus = "waiting";
}

function newLevel() {
    newNumber = Math.floor(Math.random() * 4) + 1;
    array.push(newNumber);
    
}

$(document).keypress(function(event) {
   if (gameStatus === "waiting") {
        startNewGame();
   } else {
        gameOver();
   } 
});