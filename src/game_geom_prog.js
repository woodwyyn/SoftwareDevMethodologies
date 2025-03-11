import promptSync from 'prompt-sync';

const prompt = promptSync();

function info() {
  console.log('Welcome to the Brain Games!');
  const name = prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function generateGeometricProgression() {
  const firstTerm = Math.floor(Math.random() * 4) + 1;
  const ratio = Math.floor(Math.random() * 5) + 2;
  const n = 10;
  const progression = [];

  for (let i = 0; i < n; i += 1) {
    progression.push(firstTerm * ratio ** i);
  }

  return progression;
}

function hideElement(progression) {
  const indexToHide = Math.floor(Math.random() * progression.length);
  const hiddenValue = progression[indexToHide];
  const newProgression = [...progression];
  newProgression[indexToHide] = '..';
  return { progression: newProgression, hiddenValue };
}

function game(name, progressionWithHidden) {
  const { progression, hiddenValue } = progressionWithHidden;
  console.log(`Question: ${progression.join(', ')}`);
  const answer = parseInt(prompt('Your answer: '), 10);

  if (Number.isNaN(answer)) {
    return false;
  }

  if (answer === hiddenValue) {
    console.log('Correct!');
  }

  console.log(
    `${answer} is a wrong answer ;(. The correct answer was ${hiddenValue}. Let's try again, ${name}`,
  );

  return true;
}

function gamePlay() {
  const name = info();

  console.log('What number is missing in this geometric progression?');

  for (let i = 0; i < 3; i += 1) {
    const progression = generateGeometricProgression();
    const progressionWithHidden = hideElement(progression);
    if (!game(name, progressionWithHidden)) break;
  }
}

gamePlay();
