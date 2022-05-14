let body = document.getElementById("body");

let resultText = document.getElementById("result");
let hands = document.getElementsByClassName("hand");
const playerHand = [hands[3], hands[4], hands[5]];
const opponentHand = [hands[2], hands[1], hands[0]];

function reset() {
  for (let i = 0; i < 6; i++) {
    hands[i].style = "font-size:55px";
  }
}
function playerChoice(player) {
  reset();
  playerHand[player].style = "font-size:100px";
  let opponent = opponentChoice();
  opponentHand[opponent].style = "font-size:100px";
  let result = player - opponent;
  if (result == 0) {
    //Tie
    resultText.setAttribute("class", "bg-secondary container");
    body.setAttribute("class", "bg-secondary");
    resultText.innerHTML = "It's a Tie...";
    resultText.style = "display: block;";
  } else if (result == 1 || result == -2) {
    resultText.setAttribute("class", "bg-success container");
    body.setAttribute("class", "bg-success");
    resultText.innerHTML = "You Win!!! Congratulations...";
  } else if (result == -1 || result == 2) {
    resultText.setAttribute("class", "bg-danger container");
    body.setAttribute("class", "bg-danger");
    resultText.innerHTML = "You Lost!!! Try Again...";
  }

  resultText.style = "display: block;";
}

function opponentChoice() {
  return Math.floor(Math.random() * 3);
}
