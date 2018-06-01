import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import startGame from '..';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num1 < num2) {
    return gcd(num1, num2 % num1);
  }
  if (num1 === 0 || num2 === 0) {
    return num1 + num2;
  }
  return gcd(num2, num1 % num2);
};

const getQandA = () => {
  const randomOperand1 = getRandomNum();
  const randomOperand2 = getRandomNum();
  const question = `${randomOperand1} ${randomOperand2}`;
  const answer = String(gcd(randomOperand1, randomOperand2));
  const questionAndAnswer = cons(question, answer);
  return questionAndAnswer;
};

export default () => startGame(rule, getQandA);

