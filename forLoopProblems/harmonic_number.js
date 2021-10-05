const prompt = require('prompt-sync')();
var number = prompt("Enter a number : ");
let harmonic = 1.00;
for (index = 2; index <= number; index++) 
{
    harmonic += parseFloat(1) / index;
}
console.log(harmonic);