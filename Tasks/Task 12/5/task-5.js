let clientsEstimations = []; // Переменная будущего массива
function askEstimation() { 
let clientsEstimations = prompt('Как вы оцениваете нашу кофейню от 1 до 10?').trim();
    return Number (clientsEstimations); // функция возвращает нам конкретное значение от пользователя
} 
for (let i = 1; i <= 5; i++) { // Задаём кол-во запуска запросов для юзера (promt)
    let clientEstimation = askEstimation(); // на этой строке вызываем нашу функцию и для удобства помещаем в пременную clientEstimation
    if (clientEstimation && clientEstimation <= 10) { // тут первая проверка до && еще проверят само существование оценки (проверка на undefined)
    clientsEstimations.push(clientEstimation) // далее наполняем массив оценками
    }
}
console.log(clientsEstimations); // тут наш итоговый массив
if (clientsEstimations <= 10); // проверка на undefine
let goodEstimations = clientsEstimations.filter(i => i >= 5); // фильтр элементов массива на значения > 5
let notGoodEstimations = clientsEstimations.filter(i => i <= 5  ); // фильтр элементов массива на значения < 5
alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`)