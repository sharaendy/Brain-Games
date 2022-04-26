import randomIntegerGenerator from '../randomIntegerGenerator.js';
import engine from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

function evenGameGenerator() {
  const question = randomIntegerGenerator(1, 101);
  const trueAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, trueAnswer];
}

function brainEvenGame() {
  return engine(gameRules, evenGameGenerator);
}

export default brainEvenGame;
