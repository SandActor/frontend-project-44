#!/usr/bin/env node

import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions, import/no-duplicates
import { CheckCorrectAnsver } from '../index.js';

function gcd(number1, number2) {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');
let counterToCorrect = 0;
let correctFlag = true;
const minNumber = 20;
const maxNumber = 100;

while (counterToCorrect < 3 && correctFlag) {
  const firstNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  const secondNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnsver = gcd(firstNumber, secondNumber);

  correctFlag = CheckCorrectAnsver(answer, correctAnsver, name);
  if (correctFlag) {
    counterToCorrect += 1;
  }
}
if (counterToCorrect === 3) {
  console.log(`Congratulations, ${name}!`);
}
