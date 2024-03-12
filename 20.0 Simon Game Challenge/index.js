var gameStatus = "waitingToStart";
var randomChosenColour;
var newNumber;
var level = 0;
var i = 0;
var userClicks = 0;
var buttonColours = ["green", "red", "yellow", "blue"];
var pattern = [];
var userClickedPattern = [];
var isCorrect;


function playSound(name) {
    var audio = new Audio('./sounds/'+name+'.mp3');
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).fadeToggle(100).fadeToggle(100);
    $("#" + currentColour).addClass("pressed");
setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
}, 100);

}

function startNewGame() {
    pattern = [];
    i=0;
    level = 0;
    userClickedPattern = [];
    newLevel();
    gameStatus = "sweating";
}

function gameOver() {
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
setTimeout(function() {
    $("body").removeClass("game-over");
}, 100);
    
}

function newLevel() {
    level++;
    $("h1").text("Level " + level);
    newNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[newNumber];
    pattern.push(randomChosenColour);
    animatePress(randomChosenColour);
    playSound(randomChosenColour);
    
    
}

function checkAnswer(currentLevel) {

    if (i < currentLevel) {
        if (pattern[i] === userClickedPattern[i]) {
            isCorrect = true; 
            i++;
        } else {
            isCorrect = false;
            return isCorrect
    }

    } else {
        i = 0;
    }
return isCorrect
}

$(document).keypress(function(event) {
    console.log(gameStatus);
   if (gameStatus === "waitingToStart") {
        startNewGame();
   }
});

$(".btn").click(function() {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    checkAnswer(level);
    if (isCorrect===true) {
        playSound(userChosenColour);
        animatePress(userChosenColour);
        if (pattern.length === userClickedPattern.length) {
        setTimeout(function() {
            newLevel();
            i=0;
        }, 1000);
        userClickedPattern = [];
        }
    } else if ( $("h1").html() === "Press A Key to Start") {

} else {
    gameStatus = "waitingToStart";
    playSound("wrong");
    animatePress(userChosenColour);
    gameOver();
    
}

});
