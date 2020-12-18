'use strict';

// SELECCIONANDO Y MANIPULANDO ELEMENTOS

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number 🏆';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 4;

document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value); */

// CREANDO EL JUEGO DE ADIVINAR EL NUMERO

// variables state
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//metodos

const displayMessage = function (str) {
  document.querySelector('.message').textContent = str;
};

//document.querySelector('.number').textContent = secretNumber;

// evento en el boton ,que detecta si es igual al numero
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // cuando no hay input
  if (!guess) {
    //document.querySelector('.message').textContent = 'Enter a Number 😒';
    displayMessage('enter a number');
  }
  //cuando gana
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = ('Correct Number! 🏆');
    displayMessage('Correct Number! 🏆');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // SI SE EQUIVOCA
  //cuando es mayor
  else if (guess !== secretNumber) {
    if (score > 1) {
      /* document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high! 🚀' : 'Too low! 🦞'; */
      displayMessage(guess > secretNumber ? 'Too high! 🚀' : 'Too low! ⏬');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You Lost ! ❌';
      displayMessage('You Lost ! 😥');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// para resetear el juego

const resetBtn = document.querySelector('.again');

resetBtn.addEventListener('click', function () {
  // incia el state de vuelta
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //actualiza el DOM
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  //cambia el css de lo ganado
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
