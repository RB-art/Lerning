// Event loop
/*
Задание 1
Напишите функцию countEverySecond(n), которая каждую секунду печатает в консоль цифру, начиная с 1 и заканчивая {n}.
*/
const countEverySecond = n => {
	let count = 0;
	const interval = setInterval(() => {
  	console.log(++count);
    if (count === n) {
    	clearInterval(interval);
    }
  }, 1000);
};

countEverySecond(5);
/*
Задание 2
Напишите функцию countEverySecond(n), которая каждую секунду печатает в консоль цифру, начиная с 1 и заканчивая {n}.
Пояснение к заданию: Если в предыдущем задании вы использовали setInterval, перепишите эту функцию с помощью setTimeout  (или наоборот).
*/
const countEverySecond = n => {
	let count = 0;
	setTimeout(function go() {
  	console.log(++count)
    if (count < n) {
    	setTimeout(go, 1000);
    }
  }, 1000);
};

countEverySecond(5);