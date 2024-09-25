#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let counterToCorrect = 0;
while (counterToCorrect < 3) {
  const number = Math.floor(Math.random() * 30);
  console.log(`Question: ${number}`);
  let correctAnswer = 'yes';
  const answer = readlineSync.question('Your answer: ');

  if (number % 2 !== 0) {
    correctAnswer = 'no';
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
