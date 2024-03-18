// DOM
/*
Задание 1
Напишите функцию random(min, max), которая принимает минимальное и максимальное значение и возвращает целое случайное число n, 
такое, что: min ≤ n ≤ max. Эта функция понадобится нам для следующих заданий.
Используйте Math.random(), умножение и сложение.
*/
const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
  
  alert( random(0, 1) )
/*
Задание 2
Сверстайте 5 параграфов с текстом. С помощью JS меняйте цвет фона каждого параграфа на случайный каждую секунду. 
Создайте массив с названиями цветов ['blue', 'cyan', ...] и с помощью функции из предыдущего задания выбирайте случайный цвет из массива.
*/
const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
  
  const colors = ['red', 'green', 'blue', 'yellow', 'cyan', 'purple'];
  
  const getRandomColor = () => {
      return colors[random(0, colors.length - 1)]
  };
  
  const paragraphs = document.querySelectorAll('p');
  
  setInterval(() => {
    paragraphs.forEach(p => {
        p.style.backgroundColor = getRandomColor();
    })
  }, 1000);

/*
Задание 3
Напишите функцию, которая принимает HTML в виде строки и возвращает HTML без элементов div (и всего, что внутри), 
все остальные элементы сохраняются. Используйте createElement, querySelectorAll и innerHTML.
*/
const removeDivs = html => {
	const root = document.createElement('span');
  root.innerHTML = html;
  const divs = root.querySelectorAll('div');
  divs.forEach(div => {
  	div.parentNode.removeChild(div);
  })
  return root.innerHTML;
}

const html = '<div></div>Hello<div><div><p>Hello world</p></div></div> <b>World!</b>';

alert( removeDivs(html));
alert( removeDivs(html) === 'Hello <b>World!</b>'); // Должно быть true