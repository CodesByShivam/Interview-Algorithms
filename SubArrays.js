let a = [4,8,-9,1,-1,-8,9,-4]

subarr = 0

const getCount = arr => {
    let arrLen = arr.length;
    for(let i=0;i<arrLen;i++){
        subarr = subarr+getSumCounts(arr);
        arr.shift();
    }
    console.log(subarr);
}

const getSumCounts = arr => {
    let sum = 0;
    let count = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum+arr[i];
        if(sum === 0){
            count++;
            console.log(...arr,'    ',sum,'    ',count);
        }
    }
    return count;
}

getCount(a);