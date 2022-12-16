const convertMsToDays = params => Math.round(params / 1000 / 60 / 60 / 24); // Вызывает метод который округляет к ближайшему целому(params делим на 1000 милиcекунд, делим на 60 секунд, делим на 60 минут, делим на 24 часа) и получаем дату с 1970
// Метод Math.round() возвращает число, округлённое к ближайшему целому.
function getDaysBeforeBirthday(nextBirthdayDate){
    const myBirthday = nextBirthdayDate.getTime() //получаем дату моего рождения. Метод getTime() вызывает милисекунды от 1970 года (параметр = это nextBirthdayDate )
    const currentDate = Date.now() // получаем текущую дату от 1970 года в милисекундах
    return convertMsToDays(myBirthday - currentDate) // возвращаем конвертор-функцию, у которой в параметрах от своего дня рождения отнимаем текущую дату.

}
console.log(getDaysBeforeBirthday(new Date(2023,7,29))) //Вызываем функцию getDaysBeforeBirthday, в параметре которой создаём новую дату, в параметре которой задаём дату до которой будет расчёт дней.

// const currentDate = Date.now()
// console.log(Math.round(currentDate / 1000 / 60 / 60 / 24))