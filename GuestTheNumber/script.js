let randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const quessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true

if(playGame){
   submit.addEventListener('click', function(e){
      e.preventDefault()
     const guest =  parseInt(userInput.value)
     console.log(guest);
     validateGuess(guest)
   })
}
function validateGuess(guess){
   if(isNaN(guess)){
      alert('Please enter a valid number')
   }else if(guess < 1){
      alert('Please enter a number more than 1')
   }else if(guess > 100){
      alert('Please enter a number less than 100')
   }else{
      prevGuess.push(guess)
      if(numGuess === 11){
         displayGuess(guess)
         displayMessage(`Game Over, Random number was ${randomNumber}`)
         endGame()
      }else{
         displayGuess(guess)
         checkGuess(guess)
      }
   }
}

function checkGuess(guess){
   if(guess === randomNumber){
      displayMessage(`You guessed it right`);
   }else if (guess < randomNumber){
      displayMessage(`Number is TOO Low`);
   }else if (guess > randomNumber){
      displayMessage(`Number is TOO High`);
   }
}

function displayGuess(guess){
   userInput.value = '';
   quessSlot.innerHTML += `${guess},  `
   numGuess++;
   remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message){
   lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
   userInput.value = '';
   userInput.setAttribute('disabled', '');
   p.className.add('button');
   p.innerHTML = `<h2 id='newGame'></h2>`;
   startOver.appendChild(p);
   playGame = false;
   newGame();
}

function newGame(){
   const newGameButton = document.querySelector('#newGame');
   newGameButton.addEventListener('click', function(e){
      randomNumber = (parseInt(Math.random() * 100 + 1));
      prevGuess = [];
      numGuess = 1;
      quessSlot.innerHTML = '';
      remaining.innerHTML = `${10 - newGame}`;
      userInput.removeAttribute('disabled');
      startOver.replaceChild(p);
      playGame = true;
   })
}