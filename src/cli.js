import readlineSync from 'readline-sync';

export function greetning() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}
