#!/usr/bin/env node
/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions, import/no-duplicates
import { CheckCorrectAnsver } from '../index.js';

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
let correctFlag = true;

while (counterToCorrect < 3 && correctFlag) {
  const gameData = generateArithmeticProgression();
  console.log(`Question: ${gameData.progression}`);

  const answer = readlineSync.question('Your answer: ');
  const correctAnsver = gameData.hiddenNumber;

  correctFlag = CheckCorrectAnsver(answer, correctAnsver, name);
  if (correctFlag) {
    counterToCorrect += 1;
  }
}
if (counterToCorrect === 3) {
  console.log(`Congratulations, ${name}!`);
}
