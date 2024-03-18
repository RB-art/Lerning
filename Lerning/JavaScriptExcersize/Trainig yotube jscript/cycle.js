//cycle
/*
Задание 1
Напишите программу, которая выводит в консоль сначала нечетные числа от 0 до 5, а потом четные числа от 5 до 10.
*/
for (let i = 1; i <= 11; i += 2) {
	if (i > 5) {
	  console.log(i - 1);
  } else {
    console.log(i)
  }
}

// or 

for(let i = 0; i < 5; i++){
    if(i % 2 !== 0){  
    console.log(`Nepāra ${i}`)
    }
}

for(let i = 5; i < 10; i++){
    if(i % 2 == 0){  
    console.log(`pāra ${i}`)
    }
}

/*
Задание 2
Напишите программу, которая много раз запрашивает у пользователя число, пока он не введет 0 — тогда выводится сумма этих чисел.
*/
let sum = 0;
let a;
do {
  a = prompt('Введите число для суммирования. 0 - остановить');
  sum += +a;
} while (a != 0);
alert(sum);

//or
let sum = 0;
for(let i = 0;;i++){ 
  let ask = +prompt(`ievadi skaitli kas vienāds ar 0`)
   if(ask !== 0){
       ask
       sum += +ask
   } else{
     break 
   }
}
alert(sum)
console.log(sum)

/*
Задание 3
Напишите программу, которая говорит пользователю "Введите 10", пока он не введёт 10. Затем говорит "Введите 20", потом 40 и т.д.
Если пользователь вводит другое число, нужно спросить его ещё раз, пока он не введёт нужное. Когда пользователь введёт больше 100,
напишите "Спасибо!" и остановите программу.
*/
let neededNumber = 10;
let currentNumber;

do {
  while(currentNumber != neededNumber) {
    currentNumber = prompt('Введите число ' + neededNumber);
  }
  neededNumber *= 2;
} while (currentNumber < 100);
alert('Спасибо!')

// or

let sum = 10;
for(let i = 10;i <= 100;i++){ 
  let ask = +prompt(`ievadi skaitli kas vienāds ar ${sum}`)
   if(ask > 100){
     alert(`Thank you`)
     break
   }else if(ask == sum){
       sum += +ask
       ask
       if(sum > 100){
         break
       }
   }
  else{
     ask
   }
}
alert(sum)
console.log(sum)