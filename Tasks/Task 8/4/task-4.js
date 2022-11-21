const userName = prompt('Как вас зовут?');
const userNameEdited = userName.toLowerCase().trim();
console.log(userName);
let userAge = prompt('Сколько вам лет?').trim();
userAge = Number(userAge);
console.log(userAge);
const text1 = 'Вас зовут';
const text2 = 'и вам';
const text3 = 'лет';
const allInfo = `${text1} ${userNameEdited} ${text2} ${userAge} ${text3}`;
alert(allInfo);

