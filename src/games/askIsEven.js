import readlineSync from 'readline-sync';
import { greetings, getRandomNum, checkAnswer } from '../utils';

const rule = 'Answer "yes" if number even otherwise answer "no".';
const numberOfCorrectAnswers = 3;
const isEven = question => (question % 2 === 0);

const askIsEven = () => {
  const username = greetings(rule);

  const iter = (count) => {
    if (count === numberOfCorrectAnswers) {
      console.log(`Congratulations, ${username}!`);
      return;
    }
    const question = getRandomNum();
    console.log(`Question: ${question}`);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    const result = checkAnswer(username, userAnswer, correctAnswer);
    if (result) {
      return iter(count + 1);
    }
  };
  return iter(0);
};

export default askIsEven;
