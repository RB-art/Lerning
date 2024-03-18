/* Определите остаток от деления количества лет на 10. 
В зависимости от этого выведите в алерт «Антон: 21 год» или «Антон: 24 года», или «Антон: 25 лет». 
То есть для всех чисел с 1 в конце должно быть «_1 год», для чисел с 2, 3, 4 в конце – «_3 года», а для всех остальных – «_7 лет».
Вы можете использовать для этого условные конструкции if-else или switch-case.
Входные данные: Игорь и 2000.
Выходные данные: Игорь: 23 года*/
const name = prompt(`Input yor name`);
const bornYear = +prompt(`Input yor born year`);
const age = new Date().getFullYear() - bornYear;
if (bornYear !== 0 && !isNaN(bornYear % 2) && !name == 0){
  const ageCount = age % 10;
  if(ageCount <= 1){
    alert(`${name}: ${age} год`);
  } else if(ageCount >= 2 && ageCount <= 4){
    alert(`${name}: ${age} года`);
  } else if(ageCount >= 5){
    alert(`${name}: ${age} лет`);
  } 
} else {
    alert(`input year as number or the name is blank`)
}