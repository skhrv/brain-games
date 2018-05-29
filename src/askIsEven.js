import readlineSync from 'readline-sync';
import checkAnswer from './checkAnswer';
import getRandomNum from './getRandomNum';


const askIsEven = (username, count = 0) => {
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
    return askIsEven(username, count + 1);
  }
  return false;
};

export default askIsEven;
