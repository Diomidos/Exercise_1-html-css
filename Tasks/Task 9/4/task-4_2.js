let i = 0;
do {
    let newStudent = prompt('Введите имя нового студента!');
    let newStudent02 = newStudent.trim();
    if (newStudent02){
        alert(`Добро пожаловать, ${newStudent02}!`)
    }
    i++;
} while (i < 3);