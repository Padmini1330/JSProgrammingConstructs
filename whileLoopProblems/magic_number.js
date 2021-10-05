const prompt = require('prompt-sync')();
console.log("Imagine a number betAmountween 1 and 100");
low = 1;
high = 100;
while(low <= high) 
{
    mid = Math.trunc((low + high)/2);
    console.log("Press '1' for YES and '0' for NO");
    let choice = parseInt(prompt(`Is ${mid} your magic number : `));

    if(choice == 1) 
    {
        console.log(`${mid} is magic number`);
        break;
    } 
    else 
    {
        let choice1 = parseInt(prompt(`Is number greater than ${mid} : `));
        if(choice1 == 1) 
        {
            low = mid + 1;
        } 
        else 
        {
            high = mid - 1;
        }
    }
}
if (low > high) 
{
    console.log("Your number is not betAmountween 0 and 100");
}