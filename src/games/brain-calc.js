import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import startGame from '..';

const rule = 'What is the result of the expression?';

const getQandA = () => {
  const randomOperand1 = getRandomNum();
  const randomOperand2 = getRandomNum();
  const randomOperation = getRandomNum(1, 3);
  let question;
  let answer;
  switch (randomOperation) {
    case 1:
      question = `${randomOperand1} + ${randomOperand2}`;
      answer = randomOperand1 + randomOperand2;
      break;
    case 2:
      question = `${randomOperand1} - ${randomOperand2}`;
      answer = randomOperand1 - randomOperand2;
      break;
    default:
      question = `${randomOperand1} * ${randomOperand2}`;
      answer = randomOperand1 * randomOperand2;
  }
  const questionAndAnswer = cons(question, String(answer));
  return questionAndAnswer;
};

export default () => startGame(rule, getQandA);
