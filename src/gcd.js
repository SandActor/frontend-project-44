#!/usr/bin/env node

const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
}

const getQuestionAndAnswer = () => {
  const minNumber = 20;
  const maxNumber = 100;
  const firstNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  const secondNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  const answer = gcd(firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${secondNumber}`;
  return [question, answer.toString()];
};

export default getQuestionAndAnswer;
