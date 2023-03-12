button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);

//Запустятся обработчики на 1 и 5 строках, выведут соответственно 1 и 2.
//Чтобы удалить обработчик надо в removeEventListener передать ссылку на ту же самую 
//функцию, ссылка на которую указана в addEventListener