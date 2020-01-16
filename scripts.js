// Rolls a random number between 1 and 6
// Will be used to determine each players die roll
function rollDie() {
  return (Math.floor(Math.random() * 6) + 1);
}

// Changes the HTML to show the image of the correct die for each player
// This function will call rollDie once for each player
function changeDiePicture() {

  //Get player's die rollDie
  var player1Roll = rollDie();
  var player2Roll = rollDie();

  // Get player's die image
  var player1Die = "images/dice" + player1Roll + ".png";
  var player2Die = "images/dice" + player2Roll + ".png";

  // Get the correct HTML element to change
  var player1ImageElement = document.querySelectorAll("img")[0];
  var player2ImageElement = document.querySelectorAll("img")[1];

  // Get the h1 that is being used as the title
  var siteTitle = document.querySelector("h1");

  // Change correct attribute for each player
  player1ImageElement.setAttribute("src", player1Die);
  player2ImageElement.setAttribute("src", player2Die);

  if(player1Roll > player2Roll){
    siteTitle.innerHTML = "Player 1 won!";

  } else if(player1Roll < player2Roll){

    siteTitle.innerHTML = "Player 2 won!";

  } else{

    siteTitle.innerHTML = "It was a tie!";

  }

}

changeDiePicture();
