// Возвращает случайное целое число в заданном диапазоне:
function randomIntegerGenerator(min, max) {
  const minBorder = Math.ceil(min);
  const maxBorder = Math.floor(max);
  return Math.floor(Math.random() * (maxBorder - minBorder)) + minBorder;
  // Максимум не включается, минимум включается
}

export default randomIntegerGenerator;
