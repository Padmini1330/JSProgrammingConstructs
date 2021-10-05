const prompt = require('prompt-sync')();
var number = prompt("Enter a number : ");
let index = 0;
let power = 0;
while (index <= number) 
{
    power = Math.pow(2, index);
    console.log(power);
    if (power == 256) 
    {
        break;
    }
    index++;
}