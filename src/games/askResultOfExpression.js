import readlineSync from 'readline-sync';
import { checkAnswer, getRandomNum, greetings } from '../utils';

const rules = 'What is the result of the expression?';
const numberOfCorrectAnswers = 3;

const getQuestion = (randomOperand1, randomOperand2, randomOperation) => {
  switch (randomOperation) {
    case 1:
      return `${randomOperand1} + ${randomOperand2}`;
    case 2:
      return `${randomOperand1} - ${randomOperand2}`;
    default:
      return `${randomOperand1} * ${randomOperand2}`;
  }
};

const getAnswer = (randomOperand1, randomOperand2, randomOperation) => {
  switch (randomOperation) {
    case 1:
      return String(randomOperand1 + randomOperand2);
    case 2:
      return String(randomOperand1 - randomOperand2);
    default:
      return String(randomOperand1 * randomOperand2);
  }
};

const askResultOfExpression = () => {
  const username = greetings(rules);
  const iter = (count) => {
    if (count === numberOfCorrectAnswers) {
      console.log(`Congratulations, ${username}!`);
      return;
    }

    const randomOperation = getRandomNum(1, 3);
    const randomOperand1 = getRandomNum();
    const randomOperand2 = getRandomNum();
    const question = getQuestion(randomOperand1, randomOperand2, randomOperation);

    console.log(`Question: ${question}`);
    const correctAnswer = getAnswer(randomOperand1, randomOperand2, randomOperation);
    const userAnswer = readlineSync.question('Your answer: ');

    const result = checkAnswer(username, userAnswer, correctAnswer);
    if (result) {
      return iter(count + 1);
    }
  };
  return iter(0);
};
export default askResultOfExpression;
