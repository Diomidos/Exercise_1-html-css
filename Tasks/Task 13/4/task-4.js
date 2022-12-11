const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
};
const updatedStudent = {
    ...student,
    job: 'веб-разработчик',
}
alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${updatedStudent.job}`);
console.log(updatedStudent);
