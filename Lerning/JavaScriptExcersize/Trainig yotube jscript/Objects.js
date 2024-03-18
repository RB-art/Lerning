// Objects
/*
Задание 1
Напишите функцию getInfo(persons), которая принимает массив объектов, описывающих человека, имеющих поля {name, age}, и возвращает объект со средним возрастом и именем самого старшего человека.
*/
const getInfo = persons => {
	const ages = persons.map(person => person.age);
  const averageAge = ages.reduce((a, b) => a + b, 0) / ages.length;
  const maxAge = Math.max(...ages);
  const oldestPerson = persons.find(person => person.age === maxAge);
  return {
  	averageAge,
    oldestPerson: oldestPerson.name,
  }
}

console.log( getInfo([
  {
  	name: 'Kaya',
    age: 10,
  },
  {
  	name: 'Vitya',
    age: 20,
  },
  {
  	name: 'Kolya',
    age: 30,
  }
]) )

/*
Задание 2
Напишите функцию, которая принимает массив массивов вида [['ключ1', 'значение1'], ['ключ2', 'значение2']] и возвращает объект вида: {ключ1: 'значение1', ключ2: 'значение2'}.
*/
const fromEntries = entries => {
	const obj = {};
  entries.forEach(entry => {
  	obj[entry[0]] = entry[1];
  })
  return obj;
}

console.log( fromEntries([
	['key2', 3],
  ['key1', 'hello'],
]) )

/*
ЗЗадание 3
Напишите функцию countChars(str), которая принимает строку и возвращает количество букв в этой строке.
Например: countChars('Арарат') должен вернуть: { а: 3, р: 2, т: 1 }.
*/
const countChars = str => {
	const chars = {};
  str.split('').forEach(char => {
  	const lowerChar = char.toLowerCase();
  	if (chars[lowerChar] === undefined) {
    	chars[lowerChar] = 0;
    }
    ++chars[lowerChar];
  })
  return chars;
}

console.log( countChars('Арарат') )