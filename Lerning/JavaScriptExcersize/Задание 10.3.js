/* С помощью метода prompt() получите от пользователя его имя, а затем год рождения.
Сохраните эти данные в переменные.
Затем вычислите возраст пользователя и выведите с помощью alert() сообщение вида: «Владимир: 25».
Используйте для решения шаблонные строки.
Входные данные: Игорь и 2000
Выходные данные: Игорь: 23*/
const name = prompt(`Input yor name`);
const bornYear = prompt(`Input yor born year`);
alert(`${name}: ${new Date().getFullYear() - bornYear}`);

// code with input control
const name = prompt(`Input yor name`);
const bornYear = +prompt(`Input yor born year`);
if (bornYear !== 0 && !isNaN(bornYear % 2)){
  alert(`${name}: ${new Date().getFullYear() - bornYear}`);
} else {
  alert(`input year as number`)
}