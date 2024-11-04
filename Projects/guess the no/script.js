const randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#submitGuess')
const userInput = document.querySelector('#guessField')
const remaining = document.querySelector('#left')
const restart = document.querySelector('#resetGame')
const startOver = document.querySelector('#resultParas')


let numGuess = 1;
let prevGuess = 1;

let playGame = true

if(playGame){
    submit.addEventListener('click' , function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert('please enter a valid number')
    } else if (guess < 1){
        alert('please enter a number greater than 1')
    } else if (guess > 100){
        alert('Enter no less than 100')
    } else{
        // prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`game over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`you guessed it right`)
    } else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    } else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
} 

function displayMessage(message) {
    res.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame"> Start New Game</h2>`;
    playGame = false
}

function newGame(){

}
