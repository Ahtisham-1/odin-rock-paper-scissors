let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3 + 1);
  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  return prompt().toLowerCase();
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humans = getHumanChoice();
    let computers = getComputerChoice();
    if (humans === computers) {
      console.log("its a tie");
    } else if (humans === "rock" && computers === "scissor") {
      humanScore++;
      console.log("you win");
    } else if (humans === "paper" && computers === "rock") {
      humanScore++;
      console.log("you win");
    } else if (humans === "scissor" && computers === "paper") {
      humanScore++;
      console.log("you win");
    } else {
      computerScore++;
      console.log("you loose");
    }
  }
  console.log("FINAL SCORE:");
  console.log("Human: " + humanScore);
  console.log("Computer: " + computerScore);

  if (humanScore > computerScore) {
    console.log("you win the game");
  } else if (humanScore < computerScore) {
    console.log("you loose the game");
  } else {
    console.log("its a grand tie");
  }
}

playGame();
