import greetings from './greetings';
import askIsEven from './askIsEven';

export const startBrainGame = () => greetings();

export const startBrainEven = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  const username = greetings(rules);
  return askIsEven(username);
};

