/*Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым,
и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. 
Обратите внимание на числа 0 и 1. Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.*/
const number = parseInt(prompt("Enter a positive number max 1000: "));
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime or composite number.");
}
else if (number > 1 && number < 1000) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}else {
    console.log("The number is not correct");
}