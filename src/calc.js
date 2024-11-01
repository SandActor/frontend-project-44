#!/usr/bin/env node

const getQuestionAndAnswer = () => {
  const maxNumber = 30;
  const firstNumber = Math.floor(Math.random() * maxNumber);
  const secondNumber = Math.floor(Math.random() * maxNumber);
  const operationArray = [
    { opaeration: '+', answer: firstNumber + secondNumber },
    { opaeration: '-', answer: firstNumber - secondNumber },
    { opaeration: '*', answer: firstNumber * secondNumber },
  ];
  const opaeration = operationArray[Math.floor(Math.random() * 2)];
  const question = `Question: ${firstNumber} ${opaeration.opaeration} ${secondNumber}`;
  const answer = (opaeration.answer).toString();
  return [question, answer.toString()];
};

export default getQuestionAndAnswer;
