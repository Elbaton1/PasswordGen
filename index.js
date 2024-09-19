#!/usr/bin/env node

// Character sets for generating the password
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";

// Import yargs to handle CLI flags
const argv = require("yargs")
  .usage("Usage: $0 --length [num] --numbers --uppercase")
  .option("length", {
    alias: "l",
    describe: "Length of the password",
    type: "number",
    default: 8,
  })
  .option("numbers", {
    alias: "n",
    describe: "Include numbers in the password",
    type: "boolean",
    default: false,
  })
  .option("uppercase", {
    alias: "u",
    describe: "Include uppercase letters in the password",
    type: "boolean",
    default: false,
  })
  .help("help")
  .alias("help", "h").argv;

// Function to generate the password
function generatePassword(length, includeNumbers, includeUppercase) {
  let characterPool = lowercaseLetters; // Default to lowercase letters

  if (includeNumbers) characterPool += numbers;
  if (includeUppercase) characterPool += uppercaseLetters;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }
  return password;
}

// Generate password based on user input
const password = generatePassword(argv.length, argv.numbers, argv.uppercase);

// Output the generated password
console.log(`Generated Password: ${password}`);
