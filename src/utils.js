export const getRandomNumber = (maxNumber) => {
 return Math.floor(Math.random() * maxNumber);
};

export const checkParity = (number) => {
 return number % 2 !== 0;
};
