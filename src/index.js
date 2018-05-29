import readlineSync from 'readline-sync';
import greetings from './greetings';
import checkAnswer from './checkAnswer';
import getRandomNum from './getRandomNum';

export const startBrainGame = () => greetings();

export const startBrainEven = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  const username = greetings(rules);

  const askUser = (count = 0) => {
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
      return askUser(count + 1);
    }
    return false;
  };

  return askUser();
};

