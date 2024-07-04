var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function startOver() {
    gamePattern = [];
    started = false;
    level = 0;
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}














































// var buttonColors = ["red", "blue", "green", "yellow"];
// var gamePattern = [];
// var userClickedPattern = [];
// var level = 0;
// var started = false;

// function nextSequence(){
//     randInt = Math.round(Math.random() * 3);
//     // return buttonColors[randInt];
//     randomChosenColor = buttonColors[randInt];
//     gamePattern.push(randomChosenColor);
//     playSound(randomChosenColor);
// }

// function playSound(name){
//     $("#"+name).fadeOut(100).fadeIn(100);
//     var audio = new Audio('./sounds/'+name+".mp3");
//     audio.play();
// }

// function checkAnswer(currentLevel){
//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

//         console.log("success");
//         if (userClickedPattern.length === gamePattern.length){

//         setTimeout(function () {
//             nextSequence();
//         }, 1000);

//         }

//     } else {
//         console.log("wrong");
//     }

// }


// $(".btn").on("click", function (e) {
//     console.log($(this).attr("id"));
//     userChosenColor = $(this).attr("id");
//     userClickedPattern.push(userChosenColor);
//     playSound(userChosenColor);
//     checkAnswer(userClickedPattern.length-1);
// });



// $(document).keypress(function() {
//     if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//     }
// });



