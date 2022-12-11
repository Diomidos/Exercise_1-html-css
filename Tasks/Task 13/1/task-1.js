const users = [
	{
	  username: 'David',
	  status: 'online',
	  lastActivity: 10
	},
	{
	  username: 'Lucy',
	  status: 'offline',
	  lastActivity: 22
	},
	{
          username: 'Bob',
          status: 'online',
          lastActivity: 104
        }
];


 let newUsers = users.filter(item => item.status === 'online'); // Прошёл по всему объекту item, найти staus === online
//  let onlineUsers = newUsers.username; // Вызываем конкретный объект имя пользователя
 const allUsersOnline = newUsers.map(user => user.username); // Создал новый массив, где есть только username из предыдущего массива.
 onlineUsers = allUsersOnline.join(', '); // Приводим значение объекта к строке
 alert(`Сейчас в онлайн следующие пользователи: ${onlineUsers}`);



console.log(onlineUsers);
