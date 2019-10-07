const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
function getRandomNumber(number) {
  let range = [...Array(100).keys()].map(i => ++i);
  return range[Math.floor(Math.random() * range.length)];
    }


start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  let guessedNumber = await ask(`Is the number ${getRandomNumber()}? `)
    if (guessedNumber == 'no') {
      console.log('Is it higher or lower?');
    } else {
      console.log('Yes that is the number!')
    }
    if (guessedNumber == 'higher')
    
    } 
  //process.exit();


//async function guessNumber() {
//  let guessAnswer = await ask(`Is your number: ${getRandomNumber()}? `);
//  return guessAnswer; 
//}
