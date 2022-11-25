let correctAnswers = 0;
let incorrectAnswers  = 0;
let task_1 = prompt('Сколько будет 2 + 2?').trim();
if (task_1 === '4') {
    alert('Ответ Верный', Number(task_1));
    ++correctAnswers;
} else {
    alert('Ответ Неверный');
    ++incorrectAnswers;
}
let task_2 = prompt('Сколько будет 2 * 2?').trim();
if (task_2 === '4') {
    alert('Ответ Верный', Number(task_2));
    ++correctAnswers;
} else {
    alert('Ответ Неверный');
    ++incorrectAnswers;
}
let task_3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?').trim();
if (task_3 === '1') {
    alert('Ответ Верный', Number(task_3));
    ++correctAnswers;
} else {
    alert('Ответ Неверный');
    ++incorrectAnswers;
}
let task_4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?').trim();
if (task_4 === '12') {
    alert('Ответ Верный', Number(task_4));
    ++correctAnswers;
} else {
    alert('Ответ Неверный');
    ++incorrectAnswers;
}
let task_5 = prompt('Сколько будет 2 + 2 * 2?').trim();
if (task_5 === '6') {
    alert('Ответ Верный', Number(task_5));
    ++correctAnswers;
} else {
    alert('Ответ Неверный');
    ++incorrectAnswers;
}
alert(`'Конец теста! Правильные ответы - ' ${correctAnswers} 'Неправильные ответы - ' ${incorrectAnswers} `);