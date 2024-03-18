//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
//Используйте шаблонные строки.

let cars = new Map([
  ["Mercedes", "expensive"],
  ["Volkswagen", "inexpensive"],
  ["Renault", "cheap"]
]);
for (let name of cars.keys())
for (let value of cars.values())
{
    console.log(name + `- x` + `, ` + value + `- y`); 
}