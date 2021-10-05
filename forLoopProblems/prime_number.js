const prompt = require('prompt-sync')();
var number = prompt("Enter a number : ");
var count = 0;

if (number <= 1) 
    console.log(number + " is not prime number"); 
else 
{
    for (index = 2; index < number; index++) 
    {
        if (number % index == 0) 
        {
            count++;
        }
    }
    if(count == 0) 
        console.log(number + " is prime number");
    else 
        console.log(number + " is not prime ");
}