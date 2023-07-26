// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const readline = require('readline');
function findMostFrequentElement(arr) {
  const frequencyMap = {};
  let maxFrequency = 0;
  let mostFrequentElement;

  for (let num of arr) {
    if (!frequencyMap[num]) {
      frequencyMap[num] = 1;
    } else {
      frequencyMap[num]++;
    }

    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
      mostFrequentElement = num;
    }
  }

  return mostFrequentElement;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter the input array: ', (input) => {
  const inputArray = input.split(',').map((num) => parseInt(num.trim(), 10));
  const mostFrequent = findMostFrequentElement(inputArray);
  console.log(`The most frequent element is: ${mostFrequent}`);
  rl.close();
});
