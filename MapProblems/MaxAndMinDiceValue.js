function rollDie()
{
    let map = new Map();
    const MAX_COUNT = 10;
    let oneCount = 0;
    let twoCount = 0;
    let threeCount = 0;
    let fourCount = 0;
    let fiveCount = 0;
    let sixCount = 0;
    flag = true;
    
    while(flag)
    {
        let diceNumber = Math.floor(Math.random() * 6 + 1);
        switch (diceNumber) 
        {
            case 1:
                if(oneCount == MAX_COUNT)
                   flag = false;
                if(flag == true)
                    oneCount += 1;
                break;
            case 2:
                if(twoCount == MAX_COUNT)
                    flag = false;
                if(flag == true)
                    twoCount += 1;
                
                break;
            case 3:
                if(threeCount == MAX_COUNT)
                    flag = false;
                if(flag == true)
                    threeCount += 1;
                break;
            case 4:
                if(fourCount == MAX_COUNT)
                    flag = false;
                if(flag == true)
                    fourCount += 1;
                break;
            case 5:
                if(fiveCount == MAX_COUNT)
                    flag = false;
                if(flag == true)
                    fiveCount += 1;
                break;
            case 6:
                if(sixCount == MAX_COUNT)
                    flag = false;
                if(flag == true)
                    sixCount += 1;
                break;
            default:
                console.log("Reached Maximum count");
                break;
        }
    }
   map.set(1,oneCount);
   map.set(2,twoCount);
   map.set(3,threeCount);
   map.set(4,fourCount);
   map.set(5,fiveCount);
   map.set(6,sixCount);
   console.log(map);

   maximum = 0;
   maximumKey = null;
   minimumKey = null;
   minimum = 10;
   map.forEach(function(value,key)
   {
       if(maximum < value)
       {
           maximumKey = key;
           maximum = value;
       }
       if(minimum > value)
       {
           minimumKey = key;
           minimum = value;
       }
   })
   console.log("Dice Number which repeated maximum times is : "+maximumKey);
   console.log("Dice Number which repeated minimum times is : "+minimumKey);
}
rollDie();