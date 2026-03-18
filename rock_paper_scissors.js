const userChoice = process.argv[2].toLowerCase();
console.log('Player choice', userChoice);

const options = ['rock', 'paper', 'scissors'];

if (!options.includes(userChoice)) {
  console.log('invalid choice! please choose rock, paper or scissors');
}

const randomIndex = Math.floor(Math.random() * 3);
const computerChoice = options[randomIndex];
console.log('Computer choice', computerChoice);