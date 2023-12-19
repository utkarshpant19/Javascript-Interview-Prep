let random = parseInt(Math.random() * 100 + 1);
console.log(random);

const form = document.querySelector('.form');

const guessField = document.querySelector('.guessField');

const submitBtn = document.querySelector('#subt');
const guessRemaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');
const prevGuessInput = document.querySelector('.guesses');
let prevGuesses = [];
const resultParas = document.querySelector('.resultParas');
let guessCount = 0;

const para = document.createElement('p');

let playGame = true;

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    const message = `Please enter a valid number`;
    alert(message);
  } else {
    prevGuesses.push(guess);
    if (guessCount == 5) {
      // Show the correct Number
      displayGuess(guess);
      displayMessage(`Game Over. The number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == random) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < random) {
    displayMessage('Your guessed number is too small');
  } else {
    displayMessage('Your guessed number is too large');
  }
}

function displayGuess(guess) {
  guessField.value = '';
  prevGuessInput.innerHTML += `${guess} `;
  console.log(`Previous Guess Input `, prevGuessInput.innerHTML);
  guessCount++;
  guessRemaining.innerHTML = 10 - `${guessCount}`;
}

const endGame = () => {
  // Disable Guess Input
  guessField.setAttribute('disabled', '');
  para.innerHTML = `<h1 id="restart"> Restart </h1>`;
  resultParas.appendChild(para);
  playGame = false;
  newGame();
};

const newGame = () => {
  const restartBtn = document.querySelector('#restart');
  restartBtn.addEventListener('click', () => {
    guessField.value = '';
    prevGuesses = [];
    prevGuessInput.innerHTML = '';
    guessField.removeAttribute('disabled');
    random = parseInt(Math.random() * 100 + 1);
    resultParas.removeChild(para);
  });
};

const displayMessage = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

if (playGame) {
  submitBtn.addEventListener('click', ($event) => {
    $event.preventDefault();

    const guess = parseInt(guessField.value);
    console.log(guess);

    validateGuess(guess);
  });
}
