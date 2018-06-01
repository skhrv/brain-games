
const getRandomNum = (min = 1, max = 100) => {
  const randomNum = Math.floor(Math.random() * ((max - min) + 1)) + min;
  return randomNum;
};

export default getRandomNum;
