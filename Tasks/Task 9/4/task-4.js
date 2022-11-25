let i = 0;
while (i < 3) {
    let newStudent = prompt('Введите имя нового студента!');
    let newStudent01 = newStudent.trim();
    if (newStudent01){
        alert(`Добро пожаловать, ${newStudent01}!`)
    }
i++;
}