const prompt = require('prompt-sync')();

let arrayOfNumbers = [];
let number = parseInt(prompt("Enter the Total numbers: "));
iIndex = 0;
while (iIndex < number) 
{    
    arrayOfNumbers[iIndex] = parseInt(prompt(`Enter Element ${(iIndex+1)} : `));
    iIndex++;
}
let found = 0;

for (iIndex = 0; iIndex <= number - 2; iIndex++) 
{
    for (jIndex = iIndex + 1; jIndex <= number - 1; jIndex++) 
    {
        for (kIndex = jIndex + 1; kIndex < number; kIndex++) 
        {
            let a = arrayOfNumbers[iIndex];
            let b = arrayOfNumbers[jIndex];
            let c = arrayOfNumbers[kIndex];
            let sum = a + b + c;
            if (sum == 0) 
            {
                console.log(`Triplets are : ${a} ${b} ${c}`);
                found = 1;
            }
        }
    }
}

if (found == 0) 
    console.log("No Triplets found");
