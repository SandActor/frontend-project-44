#!/usr/bin/env node

import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions, import/no-duplicates
import { CheckCorrectAnsver } from '../index.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let counterToCorrect = 0;
let correctFlag = true;
const maxNumber = 30;

while (counterToCorrect < 3 && correctFlag) {
  const number = Math.floor(Math.random() * maxNumber);
  console.log(`Question: ${number}`);
  let correctAnswer = 'yes';
  const answer = readlineSync.question('Your answer: ');

  if (number % 2 !== 0) {
    correctAnswer = 'no';
  }
  correctFlag = CheckCorrectAnsver(answer, correctAnswer, name);
  if (correctFlag) {
    counterToCorrect += 1;
  }
}
if (counterToCorrect === 3) {
  console.log(`Congratulations, ${name}!`);
}
