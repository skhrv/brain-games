import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import startGame from '..';

const rule = 'What number is missing in this progression?';
const lengthProgression = 10;

const getProgression = () => {
  const startProgression = getRandomNum();
  const stepInProgression = getRandomNum(1, 10);
  const progression = [startProgression];
  let currentNumInProgression = startProgression;
  for (let i = 1; i <= lengthProgression; i += 1) {
    currentNumInProgression += stepInProgression;
    progression.push(currentNumInProgression);
  }
  return progression;
};
const getQandA = () => {
  const progression = getProgression();
  const indexOfHiddenNum = getRandomNum(0, 9);
  const answer = String(progression[indexOfHiddenNum]);
  progression[indexOfHiddenNum] = '..';
  let question = '';
  for (let i = 0; i < progression.length; i += 1) {
    question += `${progression[i]} `;
  }
  return cons(question, answer);
};

export default () => startGame(rule, getQandA);

