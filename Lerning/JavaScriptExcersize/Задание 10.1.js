/* Напишите скрипт, который с помощью метода prompt() запрашивает у пользователя любое число.
И после этого выводит на экран в методе alert():
в первой строке — само число;
во второй строке — квадрат этого числа;
в третьей строке — куб этого числа.
Имейте в виду, что значение из prompt() приходит в виде строки.*/
const inputNumber = prompt('Please enter number');
    alert(`
    input number - ${+inputNumber} 
    number squared - ${Math.pow(+inputNumber, 2)}
    number cubed - ${Math.pow(+inputNumber, 3)}
    `);