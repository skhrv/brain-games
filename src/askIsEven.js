import readlineSync from 'readline-sync';
import { greetings, getRandomNum } from './utils';


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
    
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return iter(count + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${username}!`);
    return false;
  };
  return iter();
};
export default askIsEven;
