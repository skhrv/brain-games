import readlineSync from 'readline-sync';

const askName = () => {
  const questionName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${questionName}!`);
};

export { askName as default };
