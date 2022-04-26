import randomIntegerGenerator from './randomIntegerGenerator.js';

function randomOperatorGenerator() {
  const operators = ['+', '-', '*'];
  const index = randomIntegerGenerator(0, 3);
  return operators[index];
  // Возвращает случайный оператор
}

export default randomOperatorGenerator;
