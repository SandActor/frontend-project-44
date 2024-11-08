import { getRandomNumber } from './utils.js';

const getAnswerOperation = (valsArray, operation) => {
  switch (operation) {
    case '+':
      return valsArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
    case '-':
      return valsArray.reduce((accumulator, currentValue) => {
        return accumulator - currentValue;
      }, valsArray.length !== 0 ? valsArray[0] : 0);
    case '*':
      return valsArray.reduce((accumulator, currentValue) => {
        return accumulator * currentValue;
      }, 1);
    default:
      throw new Error('Неизвестная операция');
  }
};

const startCalcGame = () => {
  const maxNumber = 30;
  const firstNumber = getRandomNumber(maxNumber);
  const secondNumber = getRandomNumber(maxNumber);
  const operationArray = ['+', '-', '*'];
  const operation = operationArray[getRandomNumber(operationArray.length - 1)];
  const question = `Question: ${firstNumber} ${operation} ${secondNumber}`;
  const answer = getAnswerOperation([firstNumber, secondNumber], operation).toString();
  return [question, answer.toString()];
};

export default startCalcGame;
