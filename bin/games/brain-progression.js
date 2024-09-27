#!/usr/bin/env node

import readlineSync from 'readline-sync';

function generateArithmeticProgression() {
  const length = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 10) + 1;
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  const hiddenIndex = Math.floor(Math.random() * length);
  const displayedProgression = [];
  progression.forEach((element, index) => {
    displayedProgression.push(index === hiddenIndex ? '..' : element);
  });
  return {
    progression: displayedProgression.join(' '),
    hiddenNumber: progression[hiddenIndex],
  };
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

let counterToCorrect = 0;
while (counterToCorrect < 3) {
  const gameData = generateArithmeticProgression();
  console.log(`Question: ${gameData.progression}`);

  const answer = readlineSync.question('Your answer: ');
  const correctAnsver = gameData.hiddenNumber;

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
