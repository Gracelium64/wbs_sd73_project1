const userInput = process.argv[2].toLowerCase();
const shift = parseInt(process.argv[3]);

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
console.log("User Input:", userInput);
console.log("Thinking...");
await delay(500);
console.log("(Agentic AI slop in progress)");
await delay(2000);

// -- -- -- -- -- //
const keepItSafe = await keepItSecret(userInput, shift);
console.log("3nc2yp73d c0d3:", keepItSafe);
