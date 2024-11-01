#!/usr/bin/env node

const getQuestionAndAnswer = () => {
  const maxNumber = 30;
  let answer = 'yes';
  const number = Math.floor(Math.random() * maxNumber);
  if (number % 2 !== 0) {
    answer = 'no';
  }
  const question = `Question: ${number}`;
  return [question, answer.toString()];
};

export default getQuestionAndAnswer;
