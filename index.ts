#! /usr/bin/env node

import inquirer from "inquirer";

// computer will generate a number.

// user  input

//compare user input with computer generated number show result

const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
  {
    type: "number",
    name: "userGuessNumber",
    message: "please guess a number between 1 to 10",
  },
]);

if (answers.userGuessNumber === randomNumber) {
  console.log("Congtratulations! you guessed right number.");
} else {
  console.log("you guessed wrong number");
}
