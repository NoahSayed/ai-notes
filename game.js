alert("jo");
//arrays
var buttonColors = ["red","green","blue","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0


$(document).keypress(function(){
    if(!started){
         $("h1").text("level" + level)
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
animatepress(userChosenColor)
})

    
    


function nextSequence(){
    level ++;
    $("h1").text("level" + level);
var randomNumber = Math.floor(Math.random() * 4);
var randomcolorChosen = buttonColors[randomNumber];

$("#" + randomcolorChosen).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomcolorChosen);

}