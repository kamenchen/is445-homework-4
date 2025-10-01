console.log("Chen's Output from Homework 4 Exercise 3");

const number = Math.floor(Math.random() * 100) + 1;
let counter = 0;

while (true) {
  let guess = parseInt(prompt("Guess the number between 1 and 100:"));
  counter++;

  if (guess < number) {
    console.log("Too low, guess again.");
  }
  else if (guess > number) {
    console.log("Too high, guess again.");
  }
  else {
    console.log(`Correct! It took you ${counter} attempts to guess the correct number.`)
    break;
  }
}