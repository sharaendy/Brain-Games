import randomIntegerGenerator from '../modules/randomIntegerGenerator.js';
import greatesDivisor from '../modules/greatestDivisor.js';
import engine from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function primeGameGenerator() {
  const question = randomIntegerGenerator(1, 106);
  const numberDivisors = greatesDivisor(question);
  let trueAnswer;
  if (numberDivisors.length === 2) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }
  return [question, trueAnswer];
}

function brainPrimeGame() {
  return engine(gameRules, primeGameGenerator);
}

export default brainPrimeGame;
