const prompt = require('prompt-sync')();

const lowerNumber = prompt('Enter lower number: ');
const higherNumber = prompt('Enter higher number: ');

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
for (let iIndex = lowerNumber; iIndex <= higherNumber; iIndex++) 
{
    let flag = 0;

    // looping through 2 to user input number
    for (let jIndex = 2; jIndex < iIndex; jIndex++) 
    {
        if (iIndex % jIndex == 0) {
            flag = 1;
            break;
        }
    }
    if (iIndex > 1 && flag == 0) 
    {
        console.log(iIndex);
    }
}