// TODO: 1251 ~ 1261 
// TODO: 1265 ~ 1284, 1286 
// TODO: 1294 ~ 1295, 1675 

// ! 1251
// TODO: 풀이
// for(let i = 1; i <= 100; i++){
//     console.log(i + " ");
// }

// ! 1252
// TODO: 풀이
// let num = Number(prompt("정수 하나를 입력하시오"));
// let result = 0;
// for(let i = 1; i <= num; i++){
//     result = result + i + " ";
// }
// console.log(result);

// ! 1253
// TODO: 풀이
// let num = prompt("정수 2개를 입력하시오").split(" ").map(Number);
// let result = "";
// for(let i = num[0]; i <= num[1]; i++){
//     result = result + i + " ";
// }
// console.log(result);

// ! 1254
// TODO: 풀이
// let num = prompt("알파벳 2개를 입력하시오").split(" ");
// num[0] = num[0].charCodeAt();
// num[1] = num[1].charCodeAt();
// result = "";
// for(let i = num[0]; i <= num[1]; i++){
//     result = result + String.fromCharCode(i);
// }
// console.log(result);

// ! 1255
// TODO: 풀이
// let num = prompt("실수 2개를 입력하시오").split(" ").map(Number);
// let result = "";
// for(let i = num[0]; i <= num[1]; i += 0.01){
//     result = result + i.toFixed(2) + " ";
// }
// console.log(result);

// ! 1256
// TODO: 풀이
// let num = Number(prompt("정수 하나를 입력하시오"));
// let result = "";
// for(let i = 0; i < num; i++){
//     result = result + "*";
// }
// console.log(result);

// ! 1257
// TODO: 풀이
// let num = prompt("정수 2개를 입력하시오").split(" ").map(Number);
// let result = "";
// for(let i = num[0]; i <= num[1]; i++){
//     if(i % 2 == 1){
//         result = result + i + " ";
//     }
// }
// console.log(result);

// ! 1258
// TODO: 풀이
// let num = Number(prompt("정수 1개를 입력하시오"));
// let result = 0;
// for(let i = 1; i <= num; i++){
//     result = result + i;
// }
// console.log(result);

// ! 1259
// TODO: 풀이
// let num = Number(prompt("정수 1개를 입력하시오"));
// let result = 0;
// for(let i = 1; i <= num; i++){
//    if(i % 2 == 0){
//        result = result + i;
//    }
// }
// console.log(result);

// ! 1260
// TODO: 풀이
// let num = prompt("정수 2개를 입력하시오").split(" ").map(Number);
// let result = 0;
// for(let i = num[0]; i <= num[1]; i++){
//    if(i % 3 == 0){
//        result = result + i;
//    }
// }
// console.log(result);

// ! 1261
// TODO: 풀이
let num = prompt("정수 10개를 입력하시오").split(" ").map(Number);
let result = 0;
let count = 0;
for(let i = 0; i < 10; i++){
   if(num[i] % 5 == 0){
       console.log(i);
       count++;
       break;
   }
   if(count)
}
console.log(result);