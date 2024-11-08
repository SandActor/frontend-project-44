import { getRandomNumber, checkParity } from './utils.js';

const startEvenGame = () => {
  const maxNumber = 30;
  let answer = 'yes';
  const number = getRandomNumber(maxNumber);
  if (checkParity(number)) {
    answer = 'no';
  }
  const question = `Question: ${number}`;
  return [question, answer.toString()];
};

export default startEvenGame;
