import { getRandomNumber } from './utils.js';
import gameEngine from './index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};

const startPrimeGame = () => {
  const maxNumber = 10;
  const number = getRandomNumber(maxNumber);
  let answer = 'no';
  if (isPrime(number)) {
    answer = 'yes';
  }
  const question = `Question: ${number}`;
  return [question, answer.toString()];
};

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runPrimeGame = () => gameEngine(startPrimeGame, gameQuestion);

export default runPrimeGame;
