const prompt = require('prompt-sync')();

function checkPrime(number) 
{
    let flag = 0;
    for (index = 2; index <= number/2; index++) 
    {
        if (number % index == 0) 
            flag = 1;
    }
    if (flag == 1)
        console.log(number + " is not prime")
    else 
        console.log(number + " is prime")
    
}

function checkPalindrome(number) 
{ 
    while (number > 0) 
    {
        rem = number % 10;
        number = Math.floor(number / 10);
        reverse = reverse * 10 + rem;
    }
    number = reverse;
    console.log("Palindrome of the entered number is: " +number);
}

function checkPrimeAndPalindrome(number) {
    checkPrime(number);
    checkPalindrome(number);
    checkPrime(reverse);
}

let number = parseInt(prompt('Enter a number: '));
let rem = 0;
let reverse = 0;
checkPrimeAndPalindrome(number);