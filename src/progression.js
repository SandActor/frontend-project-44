import { getRandomNumber } from "./utils";

const generateArithmeticProgression = () => {
  const length = getRandomNumber(6) + 5;
  const start = getRandomNumber(10);
  const step = getRandomNumber(10) + 1;
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  const hiddenIndex = getRandomNumber(length);
  const displayedProgression = [];
  progression.forEach((element, index) => {
    displayedProgression.push(index === hiddenIndex ? '..' : element);
  });
  return {
    progression: displayedProgression.join(' '),
    hiddenNumber: progression[hiddenIndex],
  };
};

const startProgressionGame = () => {
  const gameData = generateArithmeticProgression();
  const answer = gameData.hiddenNumber;
  const question = `Question: ${gameData.progression}`;
  return [question, answer.toString()];
};

export default startProgressionGame;
