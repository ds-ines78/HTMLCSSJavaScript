//Random number generation

//Math.random generates pseudo-random number between 0 and 1
//Math.floor will round down the decimal to nearest whole number
//Random number only generated once in the game so can use const variable
//This runs automatically when browser loads script
const randomNumber = Math.floor(Math.random() * 100) + 1

//This will show the number generated to the log
console.log('Random Number', randomNumber)

//Function to get guess, compare to random number, and give feedback
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("guess").value;
  try {
    if (x == "") throw "blank.";
    if (isNaN(x)) throw "not a number.";
    x = Number(x);
    if (x < 1) throw "less than 1. Try again.";
    if (x >= 1 && x <= 100 && x > randomNumber) throw "too high. Try again.";
    if (x >= 1 && x <= 100 && x < randomNumber) throw "too low. Try again."
    if (x > 100) throw "greater than 100. Try again.";
    if (x == randomNumber) throw "correct! I was thinking of " + randomNumber + ".";
  }
  catch (err) {
    message.innerHTML = "Your guess was " + err;
  }
}