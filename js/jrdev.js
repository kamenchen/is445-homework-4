console.log("Chen's Output from Homework 4 Exercise 3");

// Function to determine if a number entered is even
// const isEven = (n1) => {
//   if (n1 % 2 === 0) {
//     console.log(`${n1} - true`);
//   } else {
//     console.log(`${n1} - false`);
//   }
// }

// Fix the function
const isEven = (n1) => {
  if (n1 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}



// Test the function with the numbers from 1 to 10
for (let i = 1; i < 11; i++) {
  //isEven(i);
  // Update with new function:
  console.log(`${i} - ${isEven(i)}`)
}



// Test with 4 and 5
const is4even = isEven(4);
const is5even = isEven(5);
console.log(is4even);
console.log(is5even);