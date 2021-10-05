const prompt = require('prompt-sync')();

function convertCelsiusToFahrenheit(celsius) 
{
    degF = (celsius * (9/5))+ 32;
    console.log("Celsius to Fahrenheit conversion value is: " +degF);
}

function convertFahrenheitToCelsius(fahrenheit) {
    degC = (fahrenheit - 32) * (5/9);
    console.log("Fahrenheit to Celsius conversion value is: " +degC);
}

let option = parseInt(prompt("Enter option: 1. Celsius to Fahrenheit 2. Fahrenheit to Celsius : "));
switch(option) 
{
    case 1: let celsius = parseFloat(prompt('Enter the temperature range within 0degreeC to 100degreesC: '));
            if (celsius >= 0 && celsius <= 100) 
                convertCelsiusToFahrenheit(celsius);
            else 
                console.log("Temperature range is exceeded"); 
            break;
    case 2: let fahrenheit = parseFloat(prompt('Enter the temperature range within 32degreeF to 212degreeF: '));
            if (fahrenheit >= 32 && fahrenheit <= 212) 
                convertFahrenheitToCelsius(fahrenheit);
            else 
                console.log("Temperature range is exceeded");
    break;
        
    default: console.log("Wrong option!");
             break;
        
}