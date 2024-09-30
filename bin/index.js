// eslint-disable-next-line import/prefer-default-export
export function CheckCorrectAnsver(answer, correctAnsver, name) {
  if (parseInt(answer, 10) === correctAnsver) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnsver}.`);
  console.log(`Let's try again, ${name}!`);
  return false;
}
