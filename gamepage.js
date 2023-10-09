// generation of random value
var y = Math.floor(Math.random() * 10 + 1); 

var guess = 1;

function submit() {
    var x = document.getElementById("guessField");

    if(x = y){
        alert("CONGRATULAIONS!!!" + player_name + " YOU GUESSED RIGHT IN " + guess + "GUESS ");
        guess = 1;
    }
else if(x > y){
  quess++;
  alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else {
    guess++;
    alert("OOPS SORRY!! TRY A BIGGER NUMBER")
}

}

function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}
// count of attempts

// until hit
  
// function for the number sent by the user