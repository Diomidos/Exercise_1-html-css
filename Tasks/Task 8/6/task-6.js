let userText = prompt('Введите текс').trim();
const wordFromText = prompt('Введите слово из текста').trim();
let indexOfWord = userText.indexOf(wordFromText);
console.log(indexOfWord);
userText = (userText.slice(0,indexOfWord));
let text = 'Результат:';
allInfo = `${text} ${userText}`;
alert(allInfo);