const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
function randomInteger(min, max) {
  let range = max - min + 1;
  return min + Math.floor(Math.random() * range);
}
//function getMedian(min, max) {
//  return Math.round((max + min) / 2);
//}

start();
async function start() {
  let min = 0;
  let max = 100;
  let guess = randomInteger(min, max);


  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);

  let guessedNumber = await ask('Is this your number ' + guess + '? ');
  let guessCounter = 1;

  while (guessedNumber !== 'yes') {
    let highOrLow = await ask('Is it higher or lower? ');

    if (highOrLow == 'higher') {
      min = guess + 1;
      console.log('You need to guess higher.');

    } else if (highOrLow == 'lower') {
      max = guess - 1;
      console.log('You need to guess lower.');

    } else { return }
    console.log(min, max);
    guess = randomInteger(min, max);
    guessedNumber = await ask('Is your number ' + guess + '? ');
    guessCounter++;

    if (guessedNumber == 'yes') {
      console.log('Great, I finally did it. It is over');
      console.log('I guessed it it in ' + guessCounter + ' turns.');
      process.exit();
    }

  }
}