import readlineSync from 'readline-sync';

export const greetings = (rules = '') => {
  console.log('Welcome to The Brain Games');
  console.log(rules);
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

export const checkAnswer = (username, userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
  return false;
};

export const getRandomNum = (min = 1, max = 100) => {
  const randomNum = Math.floor(Math.random() * ((max - min) + 1)) + min;
  return randomNum;
};
