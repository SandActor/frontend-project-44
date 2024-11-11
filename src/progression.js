import { getRandomNumber } from './utils.js';
import { gameEngine } from './index.js';

const generateArithmeticProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  const displayedProgression = [];
  progression.forEach((element) => {
    displayedProgression.push(element);
  });
  return displayedProgression.join(' ');
};

const startProgressionGame = () => {
  const length = getRandomNumber(6) + 5;
  const start = getRandomNumber(10);
  const step = getRandomNumber(10) + 1;
  const gameData = generateArithmeticProgression(length, start, step);
  const hiddenIndex = getRandomNumber(length);
  const answer = gameData[hiddenIndex];

  gameData[hiddenIndex] = '..';

  const question = `Question: ${gameData}`;
  return [question, answer.toString()];
};

const gameQuestion = 'What number is missing in the progression?';

const runProgressionGame = () => gameEngine(startProgressionGame, gameQuestion);

export default runProgressionGame;
