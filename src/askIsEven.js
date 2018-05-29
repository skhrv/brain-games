import readlineSync from 'readline-sync';
import { greetings, getRandomNum, checkAnswer } from './utils';


const askIsEven = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  const username = greetings(rules);

  const iter = (count = 0) => {
    if (count === 3) {
      console.log(`Congratulations, ${username}!`);
      return true;
    }
    const randomNum = getRandomNum();
    console.log(`Question: ${randomNum}`);
    const isEven = randomNum % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');

    const result = checkAnswer(username, userAnswer, correctAnswer);
    if (result) {
      return iter(count + 1);
    }
    return false;
  };
  return iter();
};

export default askIsEven;
