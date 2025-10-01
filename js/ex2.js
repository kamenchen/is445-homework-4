console.log("Chen's Output from Homework 4 Exercise 2");

function displayArray(userArray) {
  return {
    firstElement: userArray[0],
    lastElement: userArray[userArray.length - 1],
    length: userArray.length,
  }
}

const array = [4, 8, 12, 5, 20];

console.log(displayArray(array));