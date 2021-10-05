const prompt = require("prompt-sync")();
const num = prompt("Enter a number : ");

switch (num) 
{
    case "1":
        console.log("Units");
        break;
    case "10":
        console.log("Tens");
        break;
    case "100":
        console.log("Hundreds");
        break;
    case "1000":
        console.log("Thousands");
        break;
    case "10000":
        console.log("Ten Thousands"); 
        break;
    case "100000":
        console.log("Lakhs"); 
        break;
    case "1000000":
        console.log("Ten lakhs"); 
        break;
}