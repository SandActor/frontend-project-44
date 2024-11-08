import { getRandomNumber } from './utils.js';

const generateArithmeticProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  const hiddenIndex = getRandomNumber(length);
  const displayedProgression = [];
  progression.forEach((element, index) => {
    displayedProgression.push(index === hiddenIndex ? '..' : element);
  });
  return displayedProgression.join(' ');
};

const getAnswerProgression = (gameData, start, step) => {
  const progressionArray = gameData.split(' ');
  const hiddenIndex = progressionArray.indexOf('..');
  const missingNumber = start + hiddenIndex * step;
  return missingNumber;
};

const startProgressionGame = () => {
  const length = getRandomNumber(6) + 5;
  const start = getRandomNumber(10);
  const step = getRandomNumber(10) + 1;
  const gameData = generateArithmeticProgression(length, start, step);
  const answer = getAnswerProgression(gameData, start, step);
  const question = `Question: ${gameData}`;
  return [question, answer.toString()];
};

export default startProgressionGame;
