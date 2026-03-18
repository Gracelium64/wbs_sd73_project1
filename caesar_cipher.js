const userInput = process.argv[2].toLowerCase();
const shift = parseInt(process.argv[3]);
const mode = process.argv[4] || "encrypt";

function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

async function keepItSecret(userInput, shift) {
  const alefBet = "abcdefghijklmnopqrstuvwxyz";
  let blackSpeech = "";

  for (let i = 0; i < userInput.length; i++) {
    const char = userInput[i];

    if (alefBet.includes(char)) {
      const currentIndex = alefBet.indexOf(char);
      const newIndex = (currentIndex + shift + 26) % 26;
      blackSpeech += alefBet[newIndex];
    } else {
      blackSpeech += char;
    }
  }
  return blackSpeech;
}

async function enigma(userInput, shift) {
  return await keepItSecret(userInput, -shift);
}

console.log("User Input:", userInput);
console.log("Thinking...");
await delay(500);
console.log("(Agentic AI slop in progress)");

const spinner = ["|", "/", "-", "\\"];
let spinnerIndex = 0;

const spinnerInterval = setInterval(() => {
  process.stdout.write(`\r${spinner[spinnerIndex]} `);
  spinnerIndex = (spinnerIndex + 1) % spinner.length;
}, 42);

await delay(2500);
clearInterval(spinnerInterval);

if (mode === "encrypt") {
  const keepItSafe = await keepItSecret(userInput, shift);
  console.log("3nc2yp73d c0d3:", keepItSafe);
} else if (mode === "enigma") {
  const theTonguesOfMen = await enigma(userInput, shift);
  console.log("Westron:", theTonguesOfMen);
} else {
  console.log("Invalid mode: Use 'enigma' to decrypt");
}
