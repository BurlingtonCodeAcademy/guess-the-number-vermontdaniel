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
  
  
  start();
  
  async function start() {
    console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
    const secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
    console.log('You entered: ' + secretNumber);
    const guessedNumber = await ask(`Is your number ${randomInteger(1, 100)}? `);
    

    while (guessedNumber !== 'yes') {
        let highOrLow = await ask('Is it higher or lower? ');

        if (highOrLow === 'higher') {
        console.log('You need to guess higher.');
        await ask(`Is your number ${randomInteger(guessedNumber, secretNumber)}? `);
      } else if (highOrLow === 'lower') {
        console.log('You need to guess lower.');
        await ask(`Is your number ${randomInteger(secretNumber, guessedNumber)}? `);
      } else
      return;
      }
    }
    //process.exit();
  