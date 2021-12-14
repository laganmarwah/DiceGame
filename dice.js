var p1 = Math.floor((Math.random() * 6) + 1);
var p2 = Math.floor((Math.random() * 6) + 1);
//setting image
//var image = "dice" + p1 + ".png";
//var randomImg = "images/" + image ;
//linking back to html
if(p1 == 1){
    document.getElementById(img1).src= "images/dice1.png";
}else if(p1 == 2){
    document.querySelector("#img1").setAttribute("src","images/dice2.png");
}else if(p1 == 3){
    document.querySelector("#img1").setAttribute("src","images/dice3.png");
}else if(p1 == 4){
    document.querySelector("#img1").setAttribute("src","images/dice4.png");
}else if(p1 == 5){
    document.querySelector("#img1").src="images/dice5.png";
}else if(p1 == 6){
    document.querySelector("#img1").src= "images/dice6.png";
}


//var randomImg2 = "images/" + "dice" + p2 + ".png";

//document.querySelector("#img2").setAttribute("src",randomImg2);
if(p2 == 1){
    document.querySelector("#img2").setAttribute("src","images/dice1.png");
}else if(p2 == 2){
    document.querySelector("#img2").setAttribute("src","images/dice2.png");
}else if(p2 == 3){
    document.querySelector("#img2").setAttribute("src","images/dice3.png");
}else if(p2 == 4){
    document.querySelector("#img2").setAttribute("src","images/dice4.png");
}else if(p2 == 5){
    document.querySelector("#img2").setAttribute("src","images/dice5.png");
}else if(p2 == 6){
    document.querySelector("#img2").setAttribute("src","images/dice6.png");
}


// who winss
if(p1 > p2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if(p2>p1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else if(p1 === p2){
    document.querySelector("h1").innerHTML = "Draw!";
}else if(p1 === 6 && p2 === 6){
    document.querySelector("h1").innerHTML = "Draw!";
}
