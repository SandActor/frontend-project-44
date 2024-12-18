import { getRandomNumber } from './utils.js';
import gameEngine from './index.js';

const getAnswerOperation = (valsArray, operation) => {
  switch (operation) {
    case '+':
      return valsArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    case '-':
      return valsArray.reduce((accumulator, currentValue, index) => {
        if (index === 0) return accumulator;
        return accumulator - currentValue;
      }, valsArray[0]);
    case '*':
      return valsArray.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
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

const gameQuestion = 'What is the result of the expression?';

const runCalcGame = () => gameEngine(startCalcGame, gameQuestion);

export default runCalcGame;
