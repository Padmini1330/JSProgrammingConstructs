let diceNumber = (Math.floor(Math.random() * 10) % 6) + 1;

console.log("value after rolling a die: "+ diceNumber);

diceNumber += (Math.floor(Math.random() * 10) % 6) + 1;

console.log("value after rolling twice: "+ diceNumber);