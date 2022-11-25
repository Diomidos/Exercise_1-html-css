let userLogin = prompt('Введите логин').trim();
let userPassword = prompt('Введите пароль').trim();
if (userLogin === 'the_best_user' && userPassword === '12345678') {
  alert( 'Добро пожаловать!');
} else {
  alert( `'Логин/Пароль' ${userLogin} / ${userPassword} 'введены не верно' `);
}

// Вопрос: В условиях задачи, нужно было сделать вначале так:
// let existingUserLogin = 'the_best_user';
// userLogin = existingUserLogin;
// ,но при таких условиях код не срабатывал, а сработал так как есть сейчас :)