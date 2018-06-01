import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const numberOfCorrectAnswers = 3;

export default (rule, gameData) => {
  console.log('Welcome to The Brain Games');
  console.log(rule);
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);

  const iter = (count) => {
    if (count === numberOfCorrectAnswers) {
      console.log(`Congratulations, ${username}!`);
      return;
    }
    const game = gameData();
    const question = car(game);
    console.log(`Question: ${question}`);
    const correctAnswer = cdr(game);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
    iter(count + 1);
  };
  return iter(0);
};
