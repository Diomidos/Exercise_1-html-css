const userName = prompt('Как вас зовут?');
const userNameEdited = userName.toLowerCase().trim();
console.log(userName);
const text1 = 'Вас зовут';
allInfo = `${text1} ${userNameEdited}`;
alert(allInfo);