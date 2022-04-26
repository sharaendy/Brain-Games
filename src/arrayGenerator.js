import randomIntegerGenerator from './randomIntegerGenerator.js';

export default function arrayGenerator() {
  const array = [];

  let start = randomIntegerGenerator(1, 21);
  const step = randomIntegerGenerator(1, 8);
  for (let i = 0; i < 10; i += 1) {
    array.push(start += step);
  }
  return array;
}
