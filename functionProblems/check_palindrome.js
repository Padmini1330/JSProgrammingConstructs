const prompt = require('prompt-sync')();

function checkPalindrome(number1) 
{  
    while(number1!=0) 
    {
        rem = number1 % 10;
        number1 = Math.floor(number1 / 10);
        reverse = reverse * 10 + rem;
    }
    
    if(reverse == number2) 
        return 0;
    else 
        return 1;
}

let number1 = parseInt(prompt('Enter the first number: '));
let number2 = parseInt(prompt('Enter the second number: '));
let rem = 0;
let reverse = 0;

if (checkPalindrome(number1) == 0) 
    console.log(number1+ " & " +number2 + " are palindrome");  
else 
    console.log(number1+ " & " +number2 + " are not palindrome");
