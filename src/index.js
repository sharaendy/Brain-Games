import readlineSync from 'readline-sync';

// Движок приложения
export default function engine(gameRules, gameGenerator) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRules);

  const roundsCount = 3;
  for (let round = 1; round <= roundsCount; round += 1) {
    const gameData = gameGenerator();
    console.log(`Question: ${gameData[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === gameData[1]) {
      console.log('Correct!');
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${gameData[1]}.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
