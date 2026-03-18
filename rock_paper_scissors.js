const userChoice = process.argv[2].toLowerCase();
console.log("Player choice:", userChoice);

const options = ["rock", "paper", "scissors"];

if (!options.includes(userChoice)) {
  console.log("invalid choice! please choose rock, paper or scissors");
}

const randomIndex = Math.floor(Math.random() * 3);
const computerChoice = options[randomIndex];

if (userChoice === computerChoice) {
  console.log("Computer choice:", computerChoice);
  console.log("Tie!");
  console.log("lets play again");
} else if (!options.includes(userChoice)) {
  console.log("SKYNET wins, flawless victory!");
} else if (
  (userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "paper" && computerChoice === "rock") ||
  (userChoice === "scissors" && computerChoice === "paper")
) {
  console.log("Computer choice:", computerChoice);
  console.log("User wins!");
} else {
  console.log("Computer choice:", computerChoice);
  console.log("SKYNET wins!");
}
