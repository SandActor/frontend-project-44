#!/usr/bin/env node

import gameEngine from '../../src/index.js';

function gcd(number1, number2) {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
}

function getQuestionAndAnswer() {
  const minNumber = 20;
  const maxNumber = 100;
  const firstNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  const secondNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  const answer = gcd(firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${secondNumber}`;
  return [question, answer.toString()];
}

const gameQuestion = 'Find the greatest common divisor of given numbers.';
gameEngine(getQuestionAndAnswer, gameQuestion);
