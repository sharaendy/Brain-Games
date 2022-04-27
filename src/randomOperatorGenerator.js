import randomIntegerGenerator from './randomIntegerGenerator.js';

// Возвращает случайный оператор из предложенных:
function randomOperatorGenerator() {
  const operators = ['+', '-', '*'];
  const index = randomIntegerGenerator(0, 3);
  return operators[index];
}

export default randomOperatorGenerator;
