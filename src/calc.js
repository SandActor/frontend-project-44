import { getRandomNumber } from "./utils.js";

const getAnswerOperation = (expression) => {
  try {
    console.log(expression);
    const result = eval(expression);
    return result;
  } catch (error) {
    throw new Error('Произошла ошибка при вычислении выражения: ' + error.message);
  }
};

const startCalcGame = () => {
  const maxNumber = 30;
  const firstNumber = getRandomNumber(maxNumber);
  const secondNumber = getRandomNumber(maxNumber);
  const operationArray = ['+', '-', '*'];
  const opaeration = operationArray[getRandomNumber(operationArray.length - 1)];
  const question = `Question: ${firstNumber} ${opaeration} ${secondNumber}`;
  const stringOpaeration = [firstNumber, secondNumber].join(" " + opaeration + " ")
  const answer = getAnswerOperation(stringOpaeration).toString();
  return [question, answer.toString()];
};

export default startCalcGame;
