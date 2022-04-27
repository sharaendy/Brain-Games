import randomIntegerGenerator from '../modules/randomIntegerGenerator.js';
import randomOperatorGenerator from '../modules/randomOperatorGenerator.js';
import engine from '../index.js';

const gameRules = 'What is the result of the expression?';

function trueAnswerCalc(operand1, operand2, symbol) {
  switch (symbol) {
    case '+':
      return operand1 + operand2;

    case '-':
      return operand1 - operand2;

    case '*':
      return operand1 * operand2;
    default:
      return null;
  }
}

function calcGameGenerator() {
  const operator = randomOperatorGenerator();
  const operand1 = randomIntegerGenerator(1, 31);
  const operand2 = (operator === '*') ? randomIntegerGenerator(2, 6) : randomIntegerGenerator(1, 31);

  const question = `${operand1} ${operator} ${operand2}`;
  const trueAnswer = String(trueAnswerCalc(operand1, operand2, operator));

  return [question, trueAnswer];
}

export default function brainCalcGame() {
  return engine(gameRules, calcGameGenerator);
}
