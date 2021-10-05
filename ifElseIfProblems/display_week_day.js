const prompt = require('prompt-sync')();
let number = prompt("Enter a number : ");
if (number == 1) 
    console.log("sunday");
else if (number == 2) 
    console.log("monday");
else if (number == 3)
    console.log("tuesday");
else if (number == 4) 
    console.log("wednesday");
else if (number == 5) 
    console.log("thursday");
else if (number == 6) 
    console.log("friday");
else if (number == 7) 
    console.log("saturday");
else
    console.log("invalid input");
