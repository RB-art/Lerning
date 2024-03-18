// let diena = "trešdiena"
// console.log(diena)
// for (let i = 0; i < 6; i++) {
//     if  (i == 20) {
//         continue     
//     }
//     console.log(i)
// }

// let num =8;
// while (num) {
//     console.log(num);
//     num--;
// }

// while (num < 3) {
//     console.log(`Skaitlis ${num}`);
//     num++
// }

// galvenais: for (let i = 0; i < 2; i++) {
//     for (let i = 0; i < 3; i++){
//         if  (i == 2) {
//             break galvenais     
//         }
//         console.log(i)
//     }    
// }

// let arr = ['Ваня', 'Иштван', 'Оля',];
// result = arr.splice(1, 1);
// console.log(arr);


// let i = 0;
// while(i < 5){
//     console.log(i)
//     i++
// }
// /*
// Напишите программу, которая выводит в консоль сначала нечетные числа от 0 до 5, а потом четные числа от 5 до 10.
// */
// for(let i = 0; i < 5; i++){
//     if(i % 2 !== 0){  
//     console.log(`Nepāra ${i}`)
//     }
// }
// for(let i = 0; i > 5 && i < 10; i++){
//     if(i % 2 !== 0){  
//     console.log(`pāra ${i}`)
//     }
// }


// let sum = 0
    
// for(let i = 0;;i++){ 
//   let ask = +prompt(`ievadi skaitli kas vienāds ar 0`)

//    if(ask !== 0){
//        ask
//        sum++
//    } else{
//      break 

//    }
// }
// alert(sum)
// console.log(sum)
const jsonString = `
{
    "list": [
        {
         "name": "Petr",
         "age": "20",
         "prof": "mechanic"
        },
        {
         "name": "Vova",
         "age": "60",
         "prof": "pilot"
        }
  }
}
`;
// console.log('jsonString', jsonString);

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
// console.log('data', data);
const list = data.list;
// console.log('book', book);


/* Этап 3. Запись данных в результирующий объект */
const result = {
  category: list.name,
  lang: list.age,
  title: list.prof,
};
console.log('result', result);
