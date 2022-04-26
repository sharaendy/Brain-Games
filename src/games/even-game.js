import readlineSync from 'readline-sync';
import randomIntegerGenerator from '../numberGenerator.js';

function isEven(num) {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

function brainEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let roundCount = 1; roundCount <= 3; roundCount += 1) {
    const randomInteger = randomIntegerGenerator(1, 101);
    console.log(`Question: ${randomInteger}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const trueAnswer = isEven(randomInteger);
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.`,
      );
      console.log("Let's try again, userAnswer");
      return;
    }
  }
  console.log('Congratulations, userAnswer');
}

export default brainEven;
