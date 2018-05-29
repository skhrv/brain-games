import readlineSync from 'readline-sync';

export const greetings = (rules = '') => {
  console.log('Welcome to The Brain Games');
  console.log(rules);
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

export const getRandomNum = (min = 1, max = 100) => Math.floor(Math.random() * ((max - min) + min));

