let newArr = []; 
function getSumOfSequence(number){
    for(let i = 1; i <= number; i+=1){
        newArr.push(i);
    }
        const a = newArr[0];
        const b = newArr[newArr.length - 1];
        sum = newArr[0] + newArr[newArr.length - 1];
        return sum;
}
console.log(getSumOfSequence(5));