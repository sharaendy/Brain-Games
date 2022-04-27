import randomIntegerGenerator from '../randomIntegerGenerator.js';
import greatestDivisor from '../greatestDivisor.js';
import getIntersectionOfArrays from '../getIntersectionOfArrays.js';
import engine from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

function gcdGameGenerator() {
  const value1 = randomIntegerGenerator(1, 11) * 10;
  const value2 = randomIntegerGenerator(1, 21) * 2;
  const value1Divisors = greatestDivisor(value1);
  const value2Divisors = greatestDivisor(value2);
  const commonDivisors = getIntersectionOfArrays(
    value1Divisors,
    value2Divisors
  );
  const question = `${value1} ${value2}`;
  const trueAnswer = String(commonDivisors.pop());
  return [question, trueAnswer];
}

function brainGcdGame() {
  return engine(gameRules, gcdGameGenerator);
}

export default brainGcdGame;
