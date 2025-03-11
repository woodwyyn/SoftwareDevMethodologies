import promptSync from 'prompt-sync';

const prompt = promptSync();

export default function info() {
  console.log('Welcome to the Brain Games!');
  const name = prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}
