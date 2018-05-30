import readlineSync from 'readline-sync';
import { greetings, getRandomNum, checkAnswer } from './utils';

const rule = 'Answer "yes" if number even otherwise answer "no".';
const numberOfCorrectAnswer = 3;
const isEven = question => (question % 2 === 0 ? 'yes' : 'no');

const askIsEven = () => {
  const username = greetings(rule);

  const iter = (count = 0) => {
    if (count === numberOfCorrectAnswer) {
      console.log(`Congratulations, ${username}!`);
      return undefined;
    }
    const question = getRandomNum();
    console.log(`Question: ${question}`);
    const correctAnswer = isEven(question);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = checkAnswer(username, userAnswer, correctAnswer) ? iter(count + 1) : undefined;
    return result;
  };
  return iter();
};

export default askIsEven;
