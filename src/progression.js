#!/usr/bin/env node

const generateArithmeticProgression = () => {
  const length = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 10) + 1;
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  const hiddenIndex = Math.floor(Math.random() * length);
  const displayedProgression = [];
  progression.forEach((element, index) => {
    displayedProgression.push(index === hiddenIndex ? '..' : element);
  });
  return {
    progression: displayedProgression.join(' '),
    hiddenNumber: progression[hiddenIndex],
  };
}

const getQuestionAndAnswer = () => {
  const gameData = generateArithmeticProgression();
  const answer = gameData.hiddenNumber;
  const question = `Question: ${gameData.progression}`;
  return [question, answer.toString()];
}

export default getQuestionAndAnswer;
