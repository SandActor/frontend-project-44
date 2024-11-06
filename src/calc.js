import { getRandomNumber } from "./utils";

const startCalcGame = () => {
  const maxNumber = 30;
  const firstNumber = getRandomNumber(maxNumber);
  const secondNumber = getRandomNumber(maxNumber);
  const operationArray = [
    { opaeration: '+', answer: firstNumber + secondNumber },
    { opaeration: '-', answer: firstNumber - secondNumber },
    { opaeration: '*', answer: firstNumber * secondNumber },
  ];
  const opaeration = operationArray[Math.floor(Math.random() * (operationArray.length - 1))];
  const question = `Question: ${firstNumber} ${opaeration.opaeration} ${secondNumber}`;
  const answer = (opaeration.answer).toString();
  return [question, answer.toString()];
};

export default startCalcGame;
