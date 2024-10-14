#!/usr/bin/env node

import gameEngine from '../../src/index.js';

function getQuestionAndAnswer() {
  const maxNumber = 30;
  let answer = 'yes';
  const number = Math.floor(Math.random() * maxNumber);
  if (number % 2 !== 0) {
    answer = 'no';
  }
  const question = `Question: ${number}`;
  return [question,  answer.toString()];
}

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
gameEngine(getQuestionAndAnswer, gameQuestion);
