const tron = (a) =>  // 
    String(a).length === 1 ? `0${a}` : String(a); // Переменную функции приводим к Строке и получаем длину строки. Если длина строки равна 1(одна цифра), то Подставляем 0(ноль) перед одной цифрой. Иначе выводим значение переменной строки.
function getDateFormat(date, separator = '.') {
    const [day, mounth, year] = [  // Деструктуризация. Создаём массив. В него передаём переменные.
        date.getDate(),
        date.getMonth(),
        date.getFullYear(),
    ];
    const newDate = [day, mounth + 1, year].map(w => tron(w)) // Инициализация. Получаем в новый массив: день, месяц (т.к. месяц с 0, то + 1 тогда конечный результат 12) и год После при помощи метода map Функция - tron - Перебирает массив - newDate - от 0 до 9 .
    return newDate.join(separator) // при помощи метода join - объединяем полученый массив с separator(а именно с "." -точкой)
}
console.log(getDateFormat(new Date())); // Wizivaem function getDateFormat, в параметрах вызываем текущую дату new Date()