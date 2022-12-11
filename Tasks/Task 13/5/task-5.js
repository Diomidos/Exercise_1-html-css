function sum(...rest) {
    console.log(rest); // получаем три массива
    let sum = 0;  //задаём значение sum
    for(let i = 0; i < rest.length; i++){ 
        sum += rest[i]; // проходим по каждому элементу наших массивов
    }
    console.log(sum); // получаем суммы всех массивов и выводим в консоль
  }
sum(1, 2, 3);
sum(2, 2);
sum(10, 15, 249, 653, 846);