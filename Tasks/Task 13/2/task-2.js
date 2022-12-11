const orders = [3, 2, 4, 1];
const patients = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];
const giveTalonsInOrder = (peopleArr, turnArr) => { //peopleArr - массив обьекта наших пациентов. turnArr - массив чисел(очередедь пациентов)
    const queueOfPeopleArr = []; // создаём новый массив, в который поместим пациентов согласно очереди.
    for (let i = 0; i < peopleArr.length; i ++ ){  // Создаём цикл, где условие: i меньше длины массива наших пациентов.
    queueOfPeopleArr[   // Заполняем созданный выше массив
        turnArr.indexOf(peopleArr[i].id) // получаем индексы элементов массива очереди, которые равны id каждого пациента
    ] = peopleArr[i] // присваиваем им новое значение 3, 2, 4, 1
}
return queueOfPeopleArr; // возвращаем новый массив
};
const result = giveTalonsInOrder(patients, orders) // присваиваем пременной result вызов функции giveTalonsInOrder
console.log(result); 


