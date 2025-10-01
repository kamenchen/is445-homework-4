console.log("Chen's Output from Homework 4 Exercise 1");

let userInput = prompt("Choose a number from 1 through 100:");
let userNum = Number.parseInt(userInput);

if (Number.isInteger(userNum) && userNum >= 1 && userNum <= 100) {
  console.log(`Thank you! You entered "${userNum}", a valid number.`);
}
else {
  console.log(`Sorry, "${userNum}" is not a valid entry.`);
}