let balance = 100;
let betAmount = 1;
let winCount = 0;
let loseCount = 0;
let flag = true;
while (flag) {
    let gameResult = Math.floor(Math.random() * 2);
    if (gameResult == 1) 
    {
        balance = balance + betAmount;
        winCount++;
    } 
    else if (gameResult == 0) 
    {
        balance = balance - betAmount;
        loseCount++;
    }
    if (balance == 0 || balance == 200) {
        flag = false;
    }
}
console.log("Balance Amount  : " + balance);
console.log("Total Amount Won  : " + winCount);
console.log("Total Amount Lost : " + loseCount);