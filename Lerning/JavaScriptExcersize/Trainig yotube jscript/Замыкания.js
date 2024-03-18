// Замыкания
/*
Задание 1
Перепишите функцию так, чтобы она писала 'Hello, {name}' в консоль только при первых трёх вызовах, начиная с 4-го ничего не делала. Используйте замыкания.
*/
const sayHello = (() => {
	let countCalls = 0;

	return name => {
    if (countCalls >= 3) return;
    console.log(`Hello, ${name}`);
    ++countCalls;
  }
})();

sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
/*
Задание 2
Переменная, объявленная с помощью var, всплывает и видна на уровне функции, даже если объявлена внутри цикла for. Перепишите программу так, чтобы она печатала от 1 до 10 в консоль. Используйте замыкания.
*/
for (var i = 0; i < 10; ++i) {
	((i) => {
	  setTimeout(() => console.log(i), 0);
  })(i)
}
