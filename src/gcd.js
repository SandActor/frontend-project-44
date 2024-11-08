import { getRandomNumber } from "./utils.js";

const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const startGcdGame = () => {
  const minNumber = 20;
  const maxNumber = 100;
  const firstNumber = getRandomNumber((maxNumber - minNumber + 1))  + minNumber;
  const secondNumber = getRandomNumber((maxNumber - minNumber + 1)) + minNumber;
  const answer = gcd(firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${secondNumber}`;
  return [question, answer.toString()];
};

export default startGcdGame;
