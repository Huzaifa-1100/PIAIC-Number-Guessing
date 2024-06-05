#! /usr/bin/env node
// Project 01 Number Guessing Game

// Setup environment
// Import inquirer
// Import chalk
// Greetings
// Looping
// generate ramndom number
// User input
// matching both numbers with if else statement

// Import Inquirer
import inquirer from "inquirer";
// Importing chalk
import chalk from "chalk";
// Greetings
console.log(chalk.bgWhite.red(`\n\tWELCOME TO NUMBER GUESSING GAME\n`));

// Looping
while (true) {
  // Generate Random Number
  let generateNumber = Math.floor(Math.random() * 5 + 1);
  // User input
  let userAnswer = await inquirer.prompt({
    name: "userGuess",
    type: "number",
    message: "Please Enter a Number (1 to 5)",
  });

  // Matching both ramndom number & user guess number
  if (userAnswer.userGuess === generateNumber) {
    console.log(chalk.bgWhite.black(`\n\tYou Guess a Correct Number`));
    break;
  } else {
    console.log(
      chalk.bgRed.yellow(`\n\tYou Guess a wrong number please try again\n`)
    );
  }
}
