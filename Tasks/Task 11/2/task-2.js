const getSumOfNumbers = (number, type = "odd") => {
  if (isNaN(number) && typeof (number) !== "number") { //проверка на строку вместо числа
    return NaN;
  }

  let sum = 0;

  for (let i = 0; i <= number; i++) {
    if (type === "") { // если параметр передан как пустая строка, просто складываем все
      sum += i;
    } else if (i % 2 === 0 && type === "even") { // если предан "even" то складываем только четные
      sum += i;
    } else if (i % 2 === 0 && type === "odd") { // если предан "odd" то сладываем только не четные
      sum += i;
    }
  }

  return sum;
};
console.log(getSumOfNumbers(10, "odd"))
console.log(getSumOfNumbers(10, "even"))
console.log(getSumOfNumbers(10, ""))


// function getSumOfNumbers(n){
//   let sum = 0
//   for(let i = 0; i <= n; i++){
//     sum +=i;
//   }
//   return sum;
// }
// console.log(getSumOfNumbers(10));


// function getSumOfNumbers(n, type){
//   let count = 0
//   for(let i = 0; i <= n; i++){
//     if (type === 'odd');
//     count += i % 2 === 0;
//   }
//   return count;
// }
// console.log(getSumOfNumbers(10, 'odd'));



