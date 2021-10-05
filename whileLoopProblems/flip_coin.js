let head = 1;
let tail = 0;
let headCount = 0;
let tailCount = 0;
while(headCount < 11 && tailCount < 11) 
{
    let random = Math.floor((Math.random()*10)%2);
    if(random == 1) 
    {
        headCount++;
    } 
    else if(random == 0)
    {
        tailCount++;
    }
}
if(headCount == 11) 
{
    console.log("Head wins")
} 
else 
{
    console.log("Tail wins")
}