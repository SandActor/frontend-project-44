#!/usr/bin/env node

import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions, import/no-duplicates
import { CheckCorrectAnsver } from '../index.js';

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let counterToCorrect = 0;
const maxNumber = 10;
let correctFlag = true;

while (counterToCorrect < 3 && correctFlag) {
  const number = Math.floor(Math.random() * maxNumber);
  console.log(`Question: ${number}`);
  let correctAnswer = 'no';
  const answer = readlineSync.question('Your answer: ');

  if (isPrime(number)) {
    correctAnswer = 'yes';
  }
  correctFlag = CheckCorrectAnsver(answer, correctAnswer, name);
  if (correctFlag) {
    counterToCorrect += 1;
  }
}
if (counterToCorrect === 3) {
  console.log(`Congratulations, ${name}!`);
}
