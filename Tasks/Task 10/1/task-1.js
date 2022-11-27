let health = prompt('Введите число параметра "здоровье" для персонажа')
if (!health && !health >=0) {   
  alert('Параметр "здоровье" должен быть больше нуля!')
} else  {
  alert(`'Параметр здоровье равен', ${health}`);
}
console.log(health);