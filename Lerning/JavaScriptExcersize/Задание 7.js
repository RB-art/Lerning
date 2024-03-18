//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
//Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5];
const isOdd = (num) => num % 2 !== 0;
const odd = numbers.filter(isOdd);
const length = odd.length;
console.log("odd " + length); 
const isEven = (num) => num % 2 === 0;
const even = numbers.filter(isEven);
const length1 = even.length;
console.log("even " + length1);
