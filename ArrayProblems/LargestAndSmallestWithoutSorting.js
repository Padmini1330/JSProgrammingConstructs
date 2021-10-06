function findLargestAndSmallest(arrayOfRandomNumbers) 
{
    largest = arrayOfRandomNumbers[0];
    secondLargest = arrayOfRandomNumbers[0];
    smallest = 1000;
    secondSmallest = 1000;
    for (i = 0; i < arrayOfRandomNumbers.length; i++) 
    {
        if (arrayOfRandomNumbers[i] > largest)
        {
            secondLargest = largest;
            largest = arrayOfRandomNumbers[i];
        } 
        else if (arrayOfRandomNumbers[i] > secondLargest && arrayOfRandomNumbers[i] != largest) 
            secondLargest = arrayOfRandomNumbers[i];
        
        if (arrayOfRandomNumbers[i] < smallest) 
        {
            secondSmallest = smallest;
            smallest = arrayOfRandomNumbers[i];
        } 
        else if (arrayOfRandomNumbers[i] < secondSmallest && arrayOfRandomNumbers[i] != smallest) 
            secondSmallest = arrayOfRandomNumbers[i];
        

    }

    console.log("10 random numbers are : " + arrayOfRandomNumbers);
    if (secondLargest == largest) 
        console.log("There is no second largest element ");
    else 
        console.log(`Second Largest Element is : ${secondLargest}`);
    

    if (secondSmallest == smallest) 
        console.log("There is no second smallest element ")
    else 
        console.log(`Second smallest Element is : ${secondSmallest}`);
    

}

let arrayOfRandomNumbers = [];
    for (i = 0; i < 10; i++) 
    {
        randomNumber = Math.floor(Math.random() * 900 + 100);
        arrayOfRandomNumbers[i]=randomNumber;
    }
findLargestAndSmallest(arrayOfRandomNumbers);