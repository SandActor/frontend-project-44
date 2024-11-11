import { getRandomNumber, isParity } from './utils.js';
import gameEngine from './index.js';

const startEvenGame = () => {
  const maxNumber = 30;
  let answer = 'yes';
  const number = getRandomNumber(maxNumber);
  if (isParity(number)) {
    answer = 'no';
  }
  const question = `Question: ${number}`;
  return [question, answer.toString()];
};

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => gameEngine(startEvenGame, gameQuestion);

export default runEvenGame;
