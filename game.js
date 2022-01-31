
//arrays and var
var buttonColors = ["red","green","blue","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;


$(document).keypress(function(){
    if(!started){
         $("#level-title").text("level" + level);
            nextSequence();
                started==true;
        }
})

//functions
function playsound(name){
    var audio = new audio("sounds/" + name + ".mp3");
}
function animatepress(currentColor){
    $("#" + currentColor).addclass("pressed")
    setTimeout(function(){
        $("#" + currentColor.removeclass("pressed"))
    },100);
}


$(".btn").click(function(){
var userChosenColor = $(this).attr("id");
userClickedPattern.push(userChosenColor);

playsound(userChosenColor);
animatepress(userChosenColor);

 checkAnswer(userClickedPattern.length-1);
})

    
    


function nextSequence(){
    userClickedPattern = [];
    level ++;
    $("#level-title").text("level" + level);
var randomNumber = Math.floor(Math.random() * 4);
var randomcolorChosen = buttonColors[randomNumber];

$("#" + randomcolorChosen).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomcolorChosen);

}
function checkAnswer(currentLevel){
if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("sucess")
    if(userClickedPattern.length === gamePattern.length){
        setTimeout(function(){
            nextSequence();
        },1000);

    }
    else{
        console.log("wrong");
        playsound("wrong");
        $("body").addclass("gameover");
        setTimeout(function(){
            $("body").removeclass("gameover");
        },300)
        $("#level-title").text("Gameover, Press any key to restart");
        startOver();
    }
}
}
function startOver(){
    level = 0;
    gamePattern = []
    started = false;
}