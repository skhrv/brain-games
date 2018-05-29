import readlineSync from 'readline-sync';

const greetings = (rules = '') => {
  console.log('Welcome to The Brain Games');
  console.log(rules);
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

export default greetings;
