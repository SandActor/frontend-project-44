import readlineSync from 'readline-sync';

function gameEngine(getQuestionAndAnswer, gameQuestion) {
  const MAX_ANSWERS = 3;
  let correctCount = 0;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameQuestion);

  while (correctCount < MAX_ANSWERS) {
      const [question, correctAnswer] = getQuestionAndAnswer();
      console.log(question);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === correctAnswer) {
          console.log('Correct!');
          correctCount++;
      } 
      else {
          console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
          console.log(`Let's try again, '${name}'!`);
          break;
      }
      if (correctCount === MAX_ANSWERS) {
        console.log(`Congratulations, ${name}!`);
      }
  }
}

export default gameEngine;
