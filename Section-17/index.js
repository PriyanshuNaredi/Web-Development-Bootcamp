function randomMizer(){
    return Math.ceil(Math.random() * 6);
}

var randomNumber1 = randomMizer();
var randomNumber2 = randomMizer();

document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 wins"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 wins🚩"
} else {
    document.querySelector("h1").textContent = "Draw!"
}




