// Creating a 'const' variable to store the URL for API of quote generator 
const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
// Creating a const variable of 'quoteDisplay'
const quoteDisplayElement = document.getElementById('quoteDisplay')
// Adding our texts value document.getElementByID('quoteInput')
const quoteInputElement = document.getElementById('quoteInput')
// Using const variable to store our 'timer' 
const timerElement = document.getElementById('timer')

// Setting up an event listener to determine if the typing is right or wrong and to move to the next quote if the typing is right
quoteInputElement.addEventListener('input', () => { // The 'input' gets called everytime something in the text area changes
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')

    let correct = true       // If we typed the right characters
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false      // If we typed the wrong characters
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else {
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false
        }
    })
    if (correct) renderNewQuote()
})

// Fetching our API for quote generator and returning a promise
function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

// Creating an  `async function` to return a promise
async function renderNewQuote() {
    const quote = await getRandomQuote()
    quoteDisplayElement.innerHTML = ''
    //Getting individual element for each character to be able to change color to either right or wrong
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    //To clear out the texts inside the text area anytime a new quote is generated
    quoteInputElement.value = null
    startTimer()
}

// Setting a new date 
let startTime
function startTimer() {
    timerElement.innerText = 0
    startTime = new Date()
    setInterval(() => {
        timer.innerText = getTimerTime()
    }, 1000)
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000) // For the timer to work accurately in seconds
}

// To reload the page
function refreshPage() {
    window.location.reload();
}

// To call the game
renderNewQuote();