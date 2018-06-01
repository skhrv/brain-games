import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const numberOfCorrectAnswers = 3;

const greeting = (rules = '') => {
  console.log('Welcome to The Brain Games');
  console.log(rules);
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

const checkAnswer = (username, userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
  return false;
};

export default (rule, pair) => {
  const username = greeting(rule);

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
