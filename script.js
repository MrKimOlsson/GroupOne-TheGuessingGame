// ------------ DECLAIRATIONS ------------
// DECLAIR REFERENCES TO HTML ELEMENTS
const form = document.querySelector('.card');
const retry = document.querySelector('.btn-retry');
const btn = document.querySelector('.btn');
const darkModeBtn = document.querySelector('.dark-mode-btn');
let storeGuess = [];
let guessedNumbersAre = document.querySelector(".guessedNumbersAre");
let playerGuess = document.querySelector('#playerGuess');
let answer = document.querySelector('.answer');
let counter = document.querySelector('.counter');
let scoreOutput = document.querySelector('.score')
let randomNumber = Math.floor(Math.random() * 100) + 1
let clicks = null
let count = 10;
let scores = [];
let win = null;
let winns = 0;
let dark = false;
console.log(randomNumber, 'random number');

// ------------ FUNCTIONS ------------

const randomizerFunction = () => {
    randomNumber = Math.floor(Math.random() * 100) + 1
    console.log('Random number is: ' + randomNumber);
}

const clearFunction = () => {
    console.clear();
    changeText(answer, '')
    changeText(guessedNumbersAre, '')
    clicks = ''
    count = 10;
}

const scoreboard = () => {    
        curentScore = 10 + 10 * count;
        scores.push(curentScore);
        changeText(scoreOutput, scores)
}

// HANDLE THE PLAYER GUESS
const validateNumber = (input) => {

    // COUNTS THE CLICKS
    clicks++;
    console.log(clicks, 'number of guesses');
    
    // COUNTDOWN number of guesses left
    count--;
    changeText(counter, 'You have ' + count + ' guesses left')

    
    // IF GAME OVER
    if(input.value == randomNumber) {
        changeText(answer, `Correct! It took you: ${clicks} tries.`)
        document.querySelector('.btn').disabled = true;
        scoreboard();
    }
    
    else if(clicks == 10 || count == 0) {
        console.error('game over');
        changeText(answer, 'GAME OVER. Restart the game.')
        btn.disabled = true;

    } else if(input.value < randomNumber) {
        changeText(answer, 'Your guess was too low')
    }
    // IF GUESS IS TO HIGH
    else if (input.value > randomNumber) {
        changeText(answer, 'Your guess was too high')
    }

        // STORE THE GUESSES IN AN ARRAY
        storeGuess.push(playerGuess.value)
        guessedNumbersAre.innerText = storeGuess;
        console.log(storeGuess);
        input.value = ''        
    }

// ------------ TEXT OUTPUT CHANGERS ------------

// CHANGE THE OUTPUT TEXT
const changeText = (element, text) => {
    element.innerText = text
}
changeText(answer, '')

// ------------ LISTENERS ------------

// LISTENING FOR GUESS BUTTON CLICK
form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateNumber(playerGuess)
})

// LISTENING FOR RETRY BUTTON CLICK
retry.addEventListener('click', (e) => {
    e.preventDefault();
    clearFunction();
    randomizerFunction();
    btn.disabled = false;
    changeText(counter, 'You have ' + count + ' guesses left')
    storeGuess = []
})

// DARK MODE
const darkModeFunction = () => {
    let element = document.body;
    element.classList.toggle('dark-mode');
    changeText(darkModeBtn, 'Light mode');
    dark = true;
}

const lightModeFunction = () => {
    let element = document.body;
    element.classList.remove('dark-mode')
    changeText(darkModeBtn, 'Dark mode')
    dark = false;
}

darkModeBtn.addEventListener('click', (e) => {
    
    if(dark == true){
         lightModeFunction();

    } else {
        darkModeFunction();
    }
})