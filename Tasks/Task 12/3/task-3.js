let coffees = ['Latte', 'Cappuccino', 'Americano'] // массив кофе
let coffeeName = prompt('Поиск кофе по названию:').trim(); // запрашиваем кофе
let yourDrink = coffeeName.slice(0, 1).toUpperCase() + coffeeName.slice(1, coffeeName.length) //обрезаем первый символ и приводим его к верхнему регистру, а затем обрезаем туже строку начиная со второго символа и до ее конца.
let newCoffees = coffees.findIndex((coffee) => { // определяем индекс нашего кофе в массиве кофе и записываем в пременную newCoffees
   return coffee.toLowerCase() === coffeeName.toLowerCase(); // прям тут приводим оба заначения к нижнему регистру, для того чтобы избежать ошибок при пользовательском вводе
});
if (coffees[newCoffees]) { // проверяем есть ли такой кофе в массиве кофе)
     alert(`Держите ваш любимый кофе ${yourDrink}. Он ${newCoffees + 1} по популярности в нашей кофейне.`)
} else {
    alert('К сожалению, такого вида кофе нет в наличии');
}
