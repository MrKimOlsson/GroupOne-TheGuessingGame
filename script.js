let randomNumber = Math.floor(Math.random() * 100) + 1
console.log(randomNumber);

const form = document.querySelector('#card')
const playerGuess = document.querySelector('#playerGuess')

const validateNumber = (input) => {
        if (input.value == randomNumber) {
        console.log('rätt');
    } else if (input.value < randomNumber) {
        console.log('får lågt');
    } else if (input.value > randomNumber) {
        console.log('för högt');
    }

    input.value = ''
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateNumber(playerGuess)
})

