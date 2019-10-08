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
    let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
    console.log('You entered: ' + secretNumber);
    let guessedNumber = await ask(`Is your number ${randomInteger(1, 100)}? `); //gets first random number
    let highOrLow = await ask('Is it higher or lower? ');

    while (highOrLow === 'higher' || 'lower') {
      
    }


    while (guessedNumber !== 'yes') { 
        
        let min = 1; 
        let max = 100;
        let currentGuess = guessedNumber  //unsure if this needs to be here

        if (highOrLow === 'higher') {
        min = currentGuess; //turn min into guessedNumber
        max = secretNumber;
        console.log('You need to guess higher.');
        currentGuess = await ask(`Is your number ${randomInteger(min, max)}? `);
        guessedNumber = currentGuess; // try to make currentGuess back into GUessed number to continue loop
        
      } else if (highOrLow === 'lower') {
        min = secretNumber;
        max = currentGuess; //turn max into guessedNumber
        console.log('You need to guess lower.');
        currentGuess = await ask(`Is your number ${randomInteger(min, max)}? `); 
        guessedNumber = currentGuess; //try to make currentGuess back into guessedNumber

      } else
      return;
      }}
    
    //process.exit();
  