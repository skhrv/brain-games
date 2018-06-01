import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import startGame from '..';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => (num % 2 === 0);
const getQandA = () => {
  const question = getRandomNum();
  const answer = isEven(question) ? 'yes' : 'no';
  const questionAndAnswer = cons(question, answer);
  return questionAndAnswer;
};
export default () => startGame(rule, getQandA);

