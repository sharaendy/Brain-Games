import randomIntegerGenerator from './randomIntegerGenerator.js';

// Возвращает числовой массив длинной 10, с начальным элементом start, с шагом step:
export default function arrayGenerator() {
  const array = [];

  let start = randomIntegerGenerator(1, 21);
  const step = randomIntegerGenerator(1, 8);
  for (let i = 0; i < 10; i += 1) {
    array.push((start += step));
  }
  return array;
}
