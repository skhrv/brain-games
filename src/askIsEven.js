import readlineSync from 'readline-sync';

const askIsEven = (username, count = 0, min = 1, max = 100) => {
  if (count === 3) {
    console.log(`Congratulations, ${username}!`);
    return `Congratulations, ${username}!`;
  }
  const randomNum = Math.floor(Math.random() * ((max - min) + min));
  console.log(`Question: ${randomNum}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const isEven = randomNum % 2 === 0;
  if ((userAnswer === 'yes' && isEven) || (userAnswer === 'no' && !isEven)) {
    console.log('Correct!');
    return askIsEven(username, count + 1);
  }
  const correctAnswer = isEven ? 'yes' : 'no';
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
  return `Let's try again, ${username}!`;
};
export default askIsEven;
