import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import startGame from '..';

const rule = 'Balance the given number.';

const doNumBalanced = (num) => {
  const getArrayFromNum = () => {
    const str = String(num);
    const array = str.split('');
    for (let i = 0; i < array.length; i += 1) {
      array[i] = Number(array[i]);
    }
    return array;
  };

  const getBalancedNumFromArray = (arr) => {
    let array = arr.sort();
    const lastIndex = array.length - 1;
    while (array[lastIndex] - array[0] > 1) {
      array[lastIndex] -= 1;
      array[0] += 1;
      array = array.sort();
    }
    return array.join('');
  };
  return getBalancedNumFromArray(getArrayFromNum(num));
};

const getQandA = () => {
  const question = String(getRandomNum(100, 10000));
  const answer = doNumBalanced(question);
  const questionAndAnswer = cons(question, answer);
  return questionAndAnswer;
};

export default () => startGame(rule, getQandA);
