let totalUserScore = 0;
let totalComputerScore = 0;

function computersChoice() {
  let randomNum = Math.floor(Math.random() * 3 + 1);
  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

function userChoice() {
  return prompt().toLowerCase();
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let userInput = userChoice();
    let computersInput = computersChoice();
    if (userInput === computersInput) {
      console.log("its a tie");
    } else if (userInput === "rock" && computersInput === "scissor") {
      totalUserScore++;
      console.log("you win");
    } else if (userInput === "paper" && computersInput === "rock") {
      totalUserScore++;
      console.log("you win");
    } else if (userInput === "scissor" && computersInput === "paper") {
      totalUserScore++;
      console.log("you win");
    } else {
      totalComputerScore++;
      console.log("you loose");
    }
  }
  console.log("FINAL SCORE:");
  console.log("Human: " + totalUserScore);
  console.log("Computer: " + totalComputerScore);

  if (totalUserScore > totalComputerScore) {
    console.log("you win the game");
  } else if (totalUserScore < totalComputerScore) {
    console.log("you loose the game");
  } else {
    console.log("its a grand tie");
  }
}

playGame();
