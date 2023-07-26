// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
const readline = require('readline');
const crypto = require('crypto');
function generateRandomPassword(length) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the desired password length: ', (passwordLength) => {
  passwordLength = parseInt(passwordLength);
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(`Random Password: ${randomPassword}`);
  rl.close();
});
