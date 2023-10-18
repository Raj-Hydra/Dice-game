var randomnumber1 = Math.floor(Math.random()*6) +1; //**for Random No. */

var randomdiceimage = "dice" + randomnumber1 + ".png";

var randomImageSource = "images/" + randomdiceimage; //Selct Dice img in folder//
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src" , randomImageSource);

const refreshButton = document.getElementById('refreshButton');
// Time delayed add in this function
refreshButton.addEventListener('click', function() {

    setTimeout(function() {
        location.reload();
    }, 3000);
});


var randomnumber2 = Math.floor(Math.random()*6) + 1;
 ///select Dice use with random number.

var randomImageSource2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" ,randomImageSource2);


/*if-else function use for winner selection */

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "😄Player 1  Winner🎉.";
    
} else if (randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "😄Player 2  Winner🎉";
}
else{
    document.querySelector("h1").innerHTML = "Draw🥲";
}