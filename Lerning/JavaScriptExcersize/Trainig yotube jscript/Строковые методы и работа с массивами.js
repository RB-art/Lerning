// Строковые методы и работа с массивами
/*
Задание 1
Напишите функцию match, которая принимает 2 строки и возвращает true, если эти строки равны без учета регистра. Например, match('hEllO', 'HELLo') должен вернуть true.
*/
const match = (str1, str2) => {
    return str1.toLowerCase() == str2.toLowerCase()
}
alert(match('hEllO', 'HELLo'))

/*
Задание 2
На сайте Reddit ссылки на разделы (сабреддиты) формируются следующим образом: https://reddit.com/r/название_раздела/. Напишите функцию, которая принимает ссылку на раздел и возвращает название раздела.
*/
const getSubredditName = (link) => {
	const rIndex = link.indexOf('/r/');
  const nameStartIndex = rIndex + 3;
  return link.slice(nameStartIndex, -1);
}

alert( getSubredditName('https://reddit.com/r/dankmemes/') )

/*
Задание 3
Напишите функцию reverseAndNegate(arr), которая принимает массив чисел и возвращает перевернутый отрицательный массив.
Например: [1, -2, 5, 4] ⇒ [-4, -5, 2, -1].
*/
const reverseAndNegate = (arr) => {
	return arr.reverse().map(value => -value);
}
alert( reverseAndNegate([1, -2, 5, 4]) );

/*
Задание 4
Напишите функцию, которая принимает массив чисел и сначала к каждому чётному числу прибавляет 4, у каждого нечётного отнимает 2, потом убирает из массива числа, делящиеся на 13 без остатка и возвращает сумму оставшихся чисел.
В качестве проверки: calculate([15, 2, 3, 5, 6]) должна вернуть 20.
*/
const calculate = (arr) => {
    return arr
      .map(v => v % 2 === 0 ? v + 4 : v - 2)
      .filter(v => !(v % 13 === 0))
      .reduce((a, b) => a + b, 0)
  }
  
  alert(calculate([15, 2, 3, 5, 6]))
/*
Напишите функцию transformUpvotes(arr), которая принимает массив сокращенных записей количества лайков ['10k', '2.3k', '5k', '32', '28.4k'] и возвращает массив чисел [10000, 2300, 5000, 32, 28400].
*/
  const transformUpvote = strVal => {
	const hasK = strVal.toLowerCase().includes('k');
  if (hasK) {
  	const numPart = strVal.slice(0, -1);
    return numPart * 1000;
  }
  return Number(strVal);
}

const transformUpvotes = arr => arr.map(transformUpvote);

alert( transformUpvotes(['10k', '2.3k', '5k', '32', '28.4k']) )