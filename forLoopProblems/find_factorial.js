const prompt = require('prompt-sync')();
const number = parseInt(prompt('Enter a number : '));
let factorial = 1;

for (index = 1; index<=number; index++) 
{
    factorial = factorial * index;
}
console.log(`Factorial of ${number} is : ${factorial}`);

