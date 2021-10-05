const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter a number to print its prime factors: '));
let isPrime = 0;

for ( iIndex = 2; iIndex <= number; iIndex++ ) 
{
    let a = number % iIndex;
    if ( a == 0 ) 
    {
        isPrime = 1;
        for ( jIndex = 2; jIndex <= iIndex / 2; jIndex++ ) 
        {
            let b = iIndex % jIndex;
            if ( b == 0) 
            {
                isPrime = 0;
            }
        }
        if ( isPrime == 1 ) 
            console.log(iIndex);
    }
}