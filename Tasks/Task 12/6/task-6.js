const numbers = [10, 4, 100, -5, 54, 2];
let newNumbers = numbers.map((item) => {
    return item ** 3; 
});

let sum = newNumbers.reduce((acc, item) => {
    return acc + item;
});
console.log(sum);

let sum2 = 0;
let sumForEach = newNumbers.forEach((item, index, array) => {
    sum2 += array[index]; // с каждой новой итерацией индекс увеличивается на 1
    return sum2
});
console.log(sum2);

let sum3 =0;
for(let sum32 of newNumbers){
    sum3 += sum32;
};
console.log(sum3);

let sum4 = 0;
for(let i = 0; i < newNumbers.length; i ++) {
    sum4 += newNumbers[i];
}
console.log(sum4);