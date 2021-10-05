let numbers = [];

for(let i=0; i<5;i++)
{
    numbers[i]=Math.floor(Math.random()*90)+10;
}
console.log(numbers);
let sum =0;
let average = 0;

for(let number of numbers)
{
    sum += number;
}
average = sum/5;
console.log("sum: "+ sum+ " average: "+ average);