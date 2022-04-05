let perfectSquareNext = function(myNum) {
    let storeNum = (Math.sqrt(myNum)) - Math.floor(Math.sqrt(myNum))
    if(storeNum > 0)
        return -1;
    
    if(storeNum == 0) {
        myNum = Math.sqrt(myNum)
        myNum += 1
        storeNum = Math.pow(myNum, 2)
        return storeNum
    }
}

console.log(perfectSquareNext(2));