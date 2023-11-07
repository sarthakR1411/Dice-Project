var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var randomdiceimgsrc = "images/dice" + randomNumber1 + ".png";

//Now set the src image to randomdiceimgsrc.

document.querySelectorAll("img")[0].setAttribute("src",randomdiceimgsrc);


var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var randomdiceimgsrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomdiceimgsrc2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 WINS !!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 WINS 🚩 !!";
}
else{
    document.querySelector("h1").innerHTML = "DRAW !!";
}