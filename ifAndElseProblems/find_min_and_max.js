const randomNumbers=[];
for(i=0;i<5;i++)
{
    let randomNumber=Math.floor(Math.random()*900)+100;
    randomNumbers[i]=randomNumber;
}
console.log("3 digit random numbers are: "+randomNumbers);
let minimum=randomNumbers[0];
let maximum=randomNumbers[0];
for(i=0;i<randomNumbers.length;i++)
{
    if(randomNumbers[i]<minimum)
    minimum=randomNumbers[i];

    if(randomNumbers[i]>maximum)
    maximum=randomNumbers[i];
}
console.log("Minimum: "+minimum+" "+"Maximum: "+maximum);
