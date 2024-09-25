#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
let counterToCorrect = 0;
while (counterToCorrect < 3) {
  const firstNumber = Math.floor(Math.random() * 30);
  const secondNumber = Math.floor(Math.random() * 30);

  const operationArray = [
    { opaeration: '+', answer: firstNumber + secondNumber },
    { opaeration: '-', answer: firstNumber - secondNumber },
    { opaeration: '*', answer: firstNumber * secondNumber },
  ];

  const opaeration = operationArray[Math.floor(Math.random() * 2)];

  console.log(`Question: ${firstNumber} ${opaeration.opaeration} ${secondNumber}`);
  const answer = readlineSync.question('Your answer: ');

  if (parseInt(answer, 10) === opaeration.answer) {
    console.log('Correct!');
    counterToCorrect += 1;
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${opaeration.answer}.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
if (counterToCorrect === 3) {
  console.log(`Congratulations, ${name}!`);
}
