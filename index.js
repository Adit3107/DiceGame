var randomNum1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage1 = "dice" + randomNum1 + ".png";

var randomImgSource1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomImgSource1)

var randomNum2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage2 = "dice" + randomNum2 + ".png";

var randomImgSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImgSource2)

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!! :)"
}
else if(randomNum1 == randomNum2){
    document.querySelector("h1").innerHTML = "Game is Draw!! :(";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 wins!! :)";

}

function refreshPage(){
    window.location.reload();
}