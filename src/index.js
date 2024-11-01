import readlineSync from 'readline-sync';

const gameEngine = (getQuestionAndAnswer, gameQuestion) => {
  const MAX_ANSWERS = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameQuestion);
  for (let i = 0; i < MAX_ANSWERS; i++) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (i === MAX_ANSWERS - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default gameEngine;
