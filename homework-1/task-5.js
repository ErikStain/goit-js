"use strict";

// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'

// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'

// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'

// После всех проверок вывести в alert значение переменной message.

// const ADMIN_PASSWORD = 'jqueryismyjam';

// let message;
// message = prompt("Введите пароль");
// console.log(message)

// if(message == null) {
//     console.log('Отменено пользователем!');
// } else if (ADMIN_PASSWORD === message) {
//     console.log('Добро пожаловать!');
// } else {
//     console.log('Доступ запрещен, неверный пароль!');
// }

// alert(message);