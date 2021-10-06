function minMaxWithSort(arrayOfRandomNumbers)
{    
    arrayOfRandomNumbers.sort();
    console.log(`10 Random Numbers in sorted order are : ${arrayOfRandomNumbers}`);
    console.log(`Second largest element is : ${arrayOfRandomNumbers[8]}`);
    console.log(`Second smallest element is : ${arrayOfRandomNumbers[1]}`);
}
let arrayOfRandomNumbers = [];
    for(i = 0; i < 10; i++)
    {
        randomNumber = Math.floor(Math.random() * 899 + 100);
        arrayOfRandomNumbers[i]=randomNumber;
    }
minMaxWithSort(arrayOfRandomNumbers);