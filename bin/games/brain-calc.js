import { gameEngine } from "../../src/index";

function getQuestionAndAnswer() {
  const maxNumber = 30;
  const operationArray = [
    { opaeration: '+', answer: firstNumber + secondNumber },
    { opaeration: '-', answer: firstNumber - secondNumber },
    { opaeration: '*', answer: firstNumber * secondNumber },
  ];

  const firstNumber = Math.floor(Math.random() * maxNumber);
  const secondNumber = Math.floor(Math.random() * maxNumber);
  const opaeration = operationArray[Math.floor(Math.random() * 2)];
  const question = `Question: ${firstNumber} ${opaeration.opaeration} ${secondNumber}`;
  const answer = (opaeration.answer).toString();

  return [question, answer];
};

const startAdditionGame = () => {
  const gameQuestion = 'What is the result of the expression?';
  gameEngine(getQuestionAndAnswer, gameQuestion);
};

export default startAdditionGame;
