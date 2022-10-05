<<<<<<< HEAD
=======
// Variables
const storeGuess = []
const form = document.querySelector('#card')
const retry = document.querySelector('.btn-retry');
const btn = document.querySelector('.btn')
let guessedNumbersAre = document.querySelector(".guessedNumbersAre")
let playerGuess = document.querySelector('#playerGuess')
let answer = document.querySelector('.answer')
let randomNumber = Math.floor(Math.random() * 100) + 1
let clicks = null
console.log(randomNumber, 'random number');


const validateNumber = (input) => {

    clicks++
    console.log(clicks, 'number of guesses');

    if (input.value == randomNumber) {
        changeText(answer, `Correct! It took you: ${clicks} tries.`)
        document.querySelector('.btn').disabled = true;
    } else if (input.value < randomNumber) {
        changeText(answer, 'Your guess was too low')
    } else if (input.value > randomNumber) {
        changeText(answer, 'Your guess was too high')
    }

    if (clicks > 10) {
        console.error('game over');
        changeText(answer, 'GAME OVER. Restart the game.')
    }

    storeGuess.push(playerGuess.value)
    guessedNumbersAre.innerText = storeGuess
    console.log(storeGuess);
    input.value = ''
    
}

const changeText = (element, text) => {
    element.innerText = text
}
changeText(answer, '')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    validateNumber(playerGuess)
})

retry.addEventListener('click', () => {
    console.clear();
    changeText(answer, '')
    changeText(guessedNumbersAre, '')
    randomNumber = Math.floor(Math.random() * 100) + 1
    console.log(randomNumber);
    btn.disabled = false;
    clicks = ''
})
>>>>>>> f82dd10c5af7ff20552a3c324c304173d12a6769
