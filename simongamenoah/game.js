//arrays
var buttonColors = ["red","green","blue","yellow"];
var gamePattern = [];
var userClickedPattern = [];
function playsound(name){
    var audio = new audio("sounds/" + name + ".mp3");
}


$(".btn").click(function(){
var userChosenColor = $(this).attr("id");
userClickedPattern.push(userChosenColor);
playsound(userChosenColor);
})

    
    


function nextSequence(){
var randomNumber = Math.floor(Math.random() * 4);
var randomcolorChosen = buttonColors[randomNumber];

$("#" + randomcolorChosen).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomcolorChosen);

}