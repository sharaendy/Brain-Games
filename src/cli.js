import readlineSync from 'readline-sync';

function greetning() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}

export default greetning;
