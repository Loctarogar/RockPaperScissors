const startGameBtn = document.getElementById('start-game');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

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
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if(randomValue < 0.34) {
    console.log(ROCK);
    return ROCK;
  } else if (randomValue < 0.67) {
    console.log(PAPER);
    return PAPER;
  } else {
    console.log(SCISSORS);
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) => {
  return cChoice === pChoice ? RESULT_DRAW :
    cChoice === ROCK && pChoice === PAPER ||
    cChoice === PAPER && pChoice === SCISSORS||
    cChoice === SCISSORS && pChoice === ROCK ? RESULT_PLAYER_WINS :
    RESULT_COMPUTER_WINS;
}
// const getWinner = function(cChoice, pChoice) {
//   if(cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     cChoice === ROCK && pChoice === PAPER ||
//     cChoice === PAPER && pChoice === SCISSORS||
//     cChoice === SCISSORS && pChoice === ROCK
//   ) {
//     return RESULT_PLAYER_WINS;
//   }
//   return RESULT_COMPUTER_WINS;
// };

startGameBtn.addEventListener('click', function() {
  if (gameIsRunning) {
    return ;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  console.log(playerChoice);
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
  gameIsRunning = false;
});
