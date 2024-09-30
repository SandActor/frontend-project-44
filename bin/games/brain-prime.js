#!/usr/bin/env node

import readlineSync from 'readline-sync';

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

while (counterToCorrect < 3) {
  const number = Math.floor(Math.random() * maxNumber);
  console.log(`Question: ${number}`);
  let correctAnswer = 'no';
  const answer = readlineSync.question('Your answer: ');

  if (isPrime(number)) {
    correctAnswer = 'yes';
  }
  if (answer === correctAnswer) {
    console.log('Correct!');
    counterToCorrect += 1;
  } else {
    console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
if (counterToCorrect === 3) {
  console.log(`Congratulations, ${name}!`);
}
