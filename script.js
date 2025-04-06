let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random()*9);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifferent = Math.abs(targetGuess - humanGuess);
  const computerDifferent = Math.abs(targetGuess - computerGuess);

  return humanDifferent <= computerDifferent;
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer'){
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}