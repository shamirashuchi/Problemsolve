// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
// Example Input: [2, -5, 10, -3, 7] Example Output: 19
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumPositiveNumbers(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
}

rl.question("Enter numbers in the format [-2, 9, 2, -3, -8]: ", (userInput) => {
  try {
    const numbers = JSON.parse(userInput);
    if (!Array.isArray(numbers)) {
      throw new Error("Invalid input. Please enter numbers in the specified format.");
    }

    const result = sumPositiveNumbers(numbers);
    console.log("Sum of positive numbers:", result);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    rl.close();
  }
});
