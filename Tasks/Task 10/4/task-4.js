let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0;

// // Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    // debugger
    numbers[i] = numbers[i] ** 3;
    // debugger
    sum += numbers[i];
    // debugger
} 
console.log(sum); // 1158411

// Через цикл for of
for (let num of numbers){
    // debugger
    num = num ** 3;
    sum += num;
} 
console.log(sum); // 1003904306910622800