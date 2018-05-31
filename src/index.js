import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';
import { checkAnswer, greetings } from './utils';

const numberOfCorrectAnswers = 3;

export default (rule, pair) => {
  const username = greetings(rule);

  const iter = (count) => {
    if (count === numberOfCorrectAnswers) {
      console.log(`Congratulations, ${username}!`);
      return;
    }
    const game = pair();
    const question = car(game);
    console.log(`Question: ${question}`);
    const correctAnswer = cdr(game);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = checkAnswer(username, userAnswer, correctAnswer);
    if (result) {
      iter(count + 1);
    }
  };
  return iter(0);
};
