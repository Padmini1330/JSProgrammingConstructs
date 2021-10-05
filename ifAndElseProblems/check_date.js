var prompt = require("prompt-sync")();
let month=prompt('enter the month:');
let date=prompt('enter the date:');
console.log("month: "+month+" date: "+date);
if (month == 6 && date < 21) 
    console.log("True");
else if (month == 3 && date >= 20 && date <= 31) 
    console.log("True"); 
else if (month == 4 && date >= 1 && date <= 30) 
    console.log('True');
else if (month == 5 && date >= 1 && date <= 31) 
    console.log("True"); 
else 
    console.log("False");
