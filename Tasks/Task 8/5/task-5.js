const userString = prompt('Введите текст для обрезки').trim();
const startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки');
const endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки');
const text1 = 'Результат: ';
const allInfo =  `${text1} ${startSliceIndex} ${endSliceIndex}`;
console.log(allInfo);
alert(allInfo);