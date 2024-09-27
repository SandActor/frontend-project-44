#!/usr/bin/env node

import readlineSync from 'readline-sync';

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
while (counterToCorrect < 3) {
  const firstNumber = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
  const secondNumber = Math.floor(Math.random() * (100 - 20 + 1)) + 20;

  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnsver = gcd(firstNumber, secondNumber);
  if (parseInt(answer, 10) === correctAnsver) {
    console.log('Correct!');
    counterToCorrect += 1;
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnsver}.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
if (counterToCorrect === 3) {
  console.log(`Congratulations, ${name}!`);
}
