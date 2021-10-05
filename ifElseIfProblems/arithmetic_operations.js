const prompt = require('prompt-sync')();
let a = prompt("Enter the value of a : ");
let b = prompt("Enter the value of b : ");
let c = prompt("Enter the value of c : ");
result1 = a + b * c;
result2 = a % b + c;
result3 = c + a / b;
result4 = a * b + c;
const arrayOfResults = [result1, result2, result3, result4];
console.log(" Results : " + arrayOfResults);
let minimum = arrayOfResults[0];
let maximum = arrayOfResults[0];
for (i = 0; i < arrayOfResults.length; i++) 
{
    if (maximum < arrayOfResults[i]) 
        maximum = arrayOfResults[i];

    if (minimum > arrayOfResults[i]) 
        minimum = arrayOfResults[i];
}
console.log("Minimum : " + minimum);
console.log("Maximum : " + maximum);