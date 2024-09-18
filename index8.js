// Do-While Loop

// Basic Do-while lopp

let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);


console.log("-------------------------");

//Input Validation Using Do-While 
const prompt = require('prompt-sync')({ sigint: true });

function validatePassword() {
  let password;
  do {
    password = prompt("Enter your password (must be longer than 6 characters): ");
  } while (password.length <= 6);

  console.log("Password accepted!");
}

validatePassword();

console.log("-------------------------------------")


// Random Number Guessing Game

const Prompt = require('prompt-sync')({ sigint: true });

function guessNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let guess;
  let attempts = 0;

  do {
    guess = parseInt(prompt("Guess the number between 1 and 10: "), 10);
    attempts++;
  } while (guess !== randomNumber);

  console.log(`Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.`);
}

guessNumber();
