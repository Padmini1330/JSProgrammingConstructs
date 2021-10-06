function repeatedNumbers()
{
    let arrayOfRepeatedNumbers = [];
    for(iIndex = 1; iIndex <= 100; iIndex++)
    {
        if(iIndex % 11 == 0)
        {
            arrayOfRepeatedNumbers.push(iIndex);
        }
    }
    console.log(`Repeated numbers from 1 to 100 are : ${arrayOfRepeatedNumbers}`);
}
repeatedNumbers();