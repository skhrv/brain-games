import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import startGame from '..';

const rule = 'Is this number prime?';

const isPrime = (num) => {
  const iter = (div) => {
    if (div === num) {
      return true;
    }
    if (num % div === 0) {
      return false;
    }
    return iter(div + 1);
  };
  return iter(2);
};

const getQandA = () => {
  const question = getRandomNum();
  const answer = isPrime(question) ? 'yes' : 'no';
  const questionAndAnswer = cons(question, answer);
  return questionAndAnswer;
};

export default () => startGame(rule, getQandA);
