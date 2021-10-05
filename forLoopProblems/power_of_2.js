const prompt = require('prompt-sync')();
var number = prompt("Enter the limit :  ");
console.log("Powers of 2 are :")

for (index = 0; index <= number; index++) 
{
    power = Math.pow(2, index);
    console.log(power);
}