#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { CheckCorrectAnsver } from '../../src/index';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
let counterToCorrect = 0;
let correctFlag = true;
const maxNumber = 30;

while (counterToCorrect < 3 && correctFlag) {
  const firstNumber = Math.floor(Math.random() * maxNumber);
  const secondNumber = Math.floor(Math.random() * maxNumber);

  const operationArray = [
    { opaeration: '+', answer: firstNumber + secondNumber },
    { opaeration: '-', answer: firstNumber - secondNumber },
    { opaeration: '*', answer: firstNumber * secondNumber },
  ];

  const opaeration = operationArray[Math.floor(Math.random() * 2)];

  console.log(`Question: ${firstNumber} ${opaeration.opaeration} ${secondNumber}`);
  const answer = readlineSync.question('Your answer: ');

  correctFlag = CheckCorrectAnsver(answer, opaeration.answer, name);
  if (correctFlag) {
    counterToCorrect += 1;
  }
}
if (counterToCorrect === 3) {
  console.log(`Congratulations, ${name}!`);
}
