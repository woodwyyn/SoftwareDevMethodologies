import promptSync from 'prompt-sync';

const prompt = promptSync();

function info() {
  console.log('Welcome to the Brain Games!');
  const name = prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function getRandomNumbers(count = 3, min = 1, max = 20) {
  const numbers = [];
  for (let i = 0; i < count; i += 1) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.push(randomNumber);
  }
  return numbers;
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function scm(a, b) {
  return (a * b) / gcd(a, b);
}

function scmThree(a, b, c) {
  return scm(scm(a, b), c);
}

function game(name, numbers) {
  console.log(`Question: ${numbers.join(', ')}?`);
  const answer = parseInt(prompt('Your answer: '), 10);
  const correctAnswer = scmThree(numbers[0], numbers[1], numbers[2]);

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}`);
  return false;
}

function gamePlay() {
  const name = info();
  console.log('Find the smallest common multiple of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    game(name, getRandomNumbers());
  }

  console.log(`Congratulations, ${name}!`);
}

gamePlay();
