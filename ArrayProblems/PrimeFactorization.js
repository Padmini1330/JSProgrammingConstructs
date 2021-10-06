const prompt = require('prompt-sync')();

let isPrime = 0;
let arrayOfPrimeFactors = [];
let number = parseInt(prompt("Enter a number to print its prime factors: "));

for (iIndex = 2; iIndex <= number; iIndex++) 
{
    let a = number % iIndex;
    if (a == 0) 
    {
        isPrime = 1;
        for (jIndex = 2; jIndex <= iIndex / 2; jIndex++) 
        {
            let b = iIndex % jIndex;
            if (b == 0) 
            {
                isPrime = 0;
                break;
            }
        }
        if (isPrime == 1) 
        {
            arrayOfPrimeFactors.push(iIndex);
        }
    }
}
if (isPrime == 0 || isPrime == 1) 
{
    console.log(arrayOfPrimeFactors);
}