// Операторы, значения, переменные
/*
Задание 1
Оператор typeof в JavaScript возвращает строку с типом данных переданного в него значения. Эта строка начинается с маленькой буквы. Например: typeof 123 вернёт строку 'number', а typeof undefined вернёт строку 'undefined'.

Все возможные значения typeof: 'undefined', 'object', 'boolean', 'number', 'bigint', 'string', 'symbol', 'function'.

ВНИМАНИЕ! Из-за особенностей JavaScript typeof null вернёт 'object'. Запомните это и учтите при выполнении задания.
Найдите в коде строки 'SOME' и напишите вместо них нужное название типа — так, чтобы при запуске кода alert написал 'true'.

Исходный код:

a = 12;
b = 'number';
c = false;
d = null;
e = undefined;
f = 123.34;
g = '1' + 1;
h = 15 / 0;
i = -'5';
j = 5 == '5'

at = typeof a === 'number'; // true
bt = typeof b === 'SOME'; // false, а нужно чтобы все были true
ct = typeof c === 'SOME';
dt = typeof d === 'SOME';
et = typeof e === 'SOME';
ft = typeof f === 'SOME';
gt = typeof g === 'SOME';
ht = typeof h === 'SOME';
it = typeof i === 'SOME';
jt = typeof j === 'SOME';

alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);
*/
a = 12;
b = 'number';
c = false;
d = null;
e = undefined;
f = 123.34;
g = '1' + 1;
h = 15 / 0;
i = -'5';
j = 5 == '5'

at = typeof a === 'number'; // true
bt = typeof b === 'string'; // false, а нужно чтобы все были true
ct = typeof c === 'boolean';
dt = typeof d === 'object';
et = typeof e === 'undefined';
ft = typeof f === 'number';
gt = typeof g === 'string';
ht = typeof h === 'number';
it = typeof i === 'number';
jt = typeof j === 'boolean';

alert(at && bt && ct && dt && et && ft && gt && ht&& it && jt);

/*
Поменяйте код так, чтобы каждая переменная была объявлена до того, как ей присвоено значение. Пользуйтесь правилом: везде, где возможно, в первую очередь используйте const, если нельзя const, то let. И никогда не используйте var.
Исходный код:

NDS = 0.20
NDFL = 0.13
EXCISE = 0.1
RENT = 40000
FOOD = 15000
OTHER = 15000
MY_SALARY = 120000

ndflTax = MY_SALARY * NDFL;
mySalaryNet = MY_SALARY - ndflTax;
otherTaxes = mySalaryNet * (NDS + EXCISE);
totalAvailable = mySalaryNet - otherTaxes;
totalAvailable -= FOOD + OTHER + RENT
alert('Зарплата ' + MY_SALARY + ' рублей')
alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
alert('Осталось ' + totalAvailable + ' рублей')
*/
const NDS = 0.20
const NDFL = 0.13
const EXCISE = 0.1
const RENT = 40000
const FOOD = 15000
const OTHER = 15000
const MY_SALARY = 120000

const ndflTax = MY_SALARY * NDFL;
const mySalaryNet = MY_SALARY - ndflTax;
const otherTaxes = mySalaryNet * (NDS + EXCISE);
let totalAvailable = mySalaryNet - otherTaxes;
totalAvailable -=  FOOD + OTHER + RENT;
alert('Зарплата ' + MY_SALARY + ' рублей')
alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
alert('Осталось ' + totalAvailable + ' рублей')
/*
Задание 3
Перепишите данную математическую формулу, используя JavaScript. Программа должна запрашивать с помощью prompt значение X и выдавать 
соответсвующее значение Y в качестве ответа. Обратите внимание на приоритет операций (важно правильно расставить скобки).
*/
x = prompt('Введите X');
y = (4 * x ** 2 + 18 - 23 * x) / (5 / 9 * x + 18 * ((x ** 3 / 33) * x) ) + x * (15 / 12);
alert('Y = ' + y);
//or
let x = + prompt("Ievadi skaitli")
let y = (4 * Math.pow(x, 2) + 18 - 23 * x)/((5/9) * x + (18 * (Math.pow(x, 3)/ 33)* x)) + x * (15/12)
console.log(y)