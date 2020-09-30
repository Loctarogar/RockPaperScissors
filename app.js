const startGameBtn = document.getElementById('start-game');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function() {
  console.log('in f');
  const selection = prompt('sldfjl').toUpperCase();
  if (
    selection != ROCK &&
    selection != PAPER &&
    selection != SCISSORS
  ) {
    console.log(selection);
    alert("Invalid choice");
    return DEFAULT_USER_CHOICE;
  }
  return selection;
}

startGameBtn.addEventListener('click', function() {
  if (gameIsRunning) {
    return ;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  console.log(playerChoice);
});
