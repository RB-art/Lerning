//arguments
/*
Задание 1
Напишите программу, которая запрашивает у пользователя три числа: Катет A, Катет B, и Гипотенуза C. 
Программа проверяет по теореме Пифагора эти стороны треугольника и пишет в консоль "Это прямоугольный треугольник!" или 
"Это не прямоугольный треугольник!". Используйте if/else для проверки условия.
*/
const a = prompt('Введите катет А')
const b = prompt('Введите катет B')
const c = prompt('Введите гипотенузу C')

if (a ** 2 + b ** 2 === c ** 2) {
	alert('Это прямоугольный треугольник!')
} else {
	alert('Это не прямоугольный треугольник!')
}
//or
const a = +prompt(`ievadiet kateti A`)
const b = +prompt(`ievadiet kateti B`)
const c = +prompt(`ievadiet hipotenuzu C`)

if (Math.pow(c, 2) === Math.pow(a, 2)  + Math.pow(b, 2)){
    alert("vienādmalu trīsstūris");
    }else {
    alert("Nav vienādmalu trīsstūris");
}
/*
Задание 2
Напишите программу, которая запрашивает у пользователя три числа и выводит максимальное из них, используйте if/else/else if. 
*/
const a = prompt('Введите A')
const b = prompt('Введите B')
const c = prompt('Введите C')

if (a > b) {
	if (a > c) {
  	alert(a)
  } else {
  	alert(c)
  }
} else if (b > c) {
	alert(b)
} else {
	alert(c)
}
//or
const a = +prompt(`ievadiet vienu ciparu`)
const b = +prompt(`ievadiet otru ciparu`)
const c = +prompt(`ievadiet trešo ciparu`)

if (a > b && a > c){
    alert(a);
    }else if (b > a && b > c){
    alert(b);
    }else {
      alert (c)
    }
/*
Задание 3
Напишите программу, которая запрашивает у пользователя число N и отвечает "Число {N} четное!" или "Число {N} нечетное!"
*/
const a = +prompt(`ievadiet vienu ciparu`)
if (a % 2 !==0){
    alert("Nepara");
}else {
      alert ("Pāra")
}
