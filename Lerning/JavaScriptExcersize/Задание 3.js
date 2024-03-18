//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
let string = "Hello"
let splitstring = string.split("");
let reverseAray = splitstring.reverse();
let joinAray = reverseAray.join("");
console.log(joinAray)

