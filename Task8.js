// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const readline = require('readline');

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Array should contain at least two elements.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    return "There is no second smallest element in the array.";
  }

  return secondSmallest;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the array: ', (input) => {
  const array = input.match(/\d+/g).map(Number);
  const secondSmallest = findSecondSmallest(array);
  console.log(`The second smallest element is: ${secondSmallest}`);
  rl.close();
});
