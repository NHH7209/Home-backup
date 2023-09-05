// 1001 ~ 1008
// 1010 ~ 1015
// 1017 ~ 1072
// 1074 ~ 1095

// ! 1001
// TODO: 풀이
// console.log("Hello");

// ! 1002
// TODO: 풀이
// console.log("Hello World");

// ! 1003
// TODO: 풀이
// console.log("Hello\nWorld");

// ! 1004
// TODO: 풀이
// console.log("'Hello'");

// ! 1005
// TODO: 풀이
// console.log('"Hello World"');

// ! 1006
// TODO: 풀이
// console.log('"!@#$%^&*()"');

// ! 1007
// TODO: 풀이
// console.log("C:\\Download\\hello.cpp");

// ! 1008
// TODO: 풀이
// console.log("┌┬┐" + "\n" + "├┼┤" + "\n" + "└┴┘");

// ! 1010
// TODO: 풀이
// let num = Number(prompt("정수를 입력하시오"));
// console.log(num);

// ! 1011
// TODO: 풀이
// let char = prompt("문자를 입력하시오");
// console.log(char);

// ! 1012
// TODO: 풀이
// let float = Number(rompt("실수를 입력하시오"));
// console.log(float);

// ! 1013
// TODO: 풀이
// let num1 = Number(prompt("첫번째 정수를 입력하시오"));
// let num2 = Number(prompt("두번째 정수를 입력하시오"));
// console.log(num1 + " " + num2);

// ! 1014
// TODO: 풀이
// let char1 = prompt("첫번째 문자를 입력하시오");
// let char2 = prompt("두번째 문자를 입력하시오");
// console.log(char2 + " " + char1);

// ! 1015
// TODO: 풀이
// let float = Number(prompt("실수를 입력하시오"));
// console.log(float.toFixed(2));

// ! 1017
// TODO: 풀이
// let num = Number(prompt("정수를 입력하시오"));
// console.log(num + " " +  num + " " + num);

// ! 1018
// TODO: 풀이
// let str = prompt("시:분 형식으로 입력하시오");
// console.log(str);

// ! 1019
// TODO: 풀이
// let date = prompt("년, 월, 일을 .(닷)으로 구분하여 입력하시오").split(".");
// let year = Number(date[0]);
// let month = Number(date[1]);
// let day = Number(date[2]);
// if(month < 10){
//     month = "0" + month;
// }
// if(day < 10){
//     day = "0" + day;
// }
// console.log(year + "." + month + "." + day);

// ! 1020
// TODO: 풀이
// let number = prompt("주민번호를 입력해주세요").split("-");
// console.log(number[0] + number[1]);

// ! 1021
// TODO: 풀이
// let str = prompt("단어를 입력하시오");
// console.log(str);

// ! 1022
// TODO: 풀이
// let str = prompt("문장을 입력하시오");
// console.log(str);

// ! 1023
// TODO: 풀이
// let num = prompt("정수를 입력하시오").split(".");
// let int = Number(num[0]);
// let float = Number(num[1]);
// console.log(int + "\n" + float);

// ! 1024
// TODO: 풀이
// let str = prompt("영어 단어를 입력하시오");
// for(let i = 0; i < str.length; i++){
//     console.log("'" + str[i] + "'\n");
// }

// ! 1025
// TODO: 풀이
// let num = prompt("다섯 자리로 이루어진 1개의 정수를 입력하시오");
// let n10000 = num[0] + "0000";
// let n1000 = num[1] + "000";
// let n100 = num[2] + "00";
// let n10 = num[3] + "0";
// let n1 = num[4];
// let result = "[" + n10000 +"]\n" + "[" + n1000 +"]\n" + "[" + n100 +"]\n"
//  + "[" + n10 +"]\n" + "[" + n1 +"]\n"
// console.log(result);

// ! 1026
// TODO: 풀이
// let time = prompt("시:분:초 형식으로 입력하시오").split(":");
// console.log(time[1]);

// ! 1027
// TODO: 풀이
// let date = prompt("년, 월, 일을 .(닷)으로 구분하여 입력하시오").split(".").map(Number);
// let year = date[0];
// let month = date[1];
// let day = date[2];
// if(month < 10){
//     month = "0" + month;
// }
// if(day < 10){
//     day = "0" + day;
// }
// console.log(day + "-" + month + "-" + year);

// ! 1028
// TODO: 풀이
// let num = Number(prompt("정수 1개를 입력하시오"));
// console.log(num);

// ! 1029
// TODO: 풀이
// let float = Number(prompt("실수를 입력하시오"));
// console.log(float.toFixed(11));

// ! 1030
// TODO: 풀이
// let num = Number(prompt("정수를 입력하시오"));
// console.log(num);

// ! 1031
// TODO: 풀이
// let num = Number(prompt("정수를 입력하시오"));
// let result = num.toString(8);
// console.log(result);

// ! 1032
// TODO: 풀이
// let num = Number(prompt("정수를 입력하시오"));
// let result = num.toString(16);
// console.log(result);

// ! 1033
// TODO: 풀이
// let num = Number(prompt("정수를 입력하시오"));
// let result = num.toString(16);
// console.log(result.toUpperCase());

// ! 1034
// TODO: 풀이
// let num = Number(prompt("정수를 입력하시오"));
// let result = parseInt(num, 8).toString(10);
// console.log(result);

// ! 1035
// TODO: 풀이
// let num = prompt("정수를 입력하시오");
// let result = parseInt(num, 16).toString(8);
// console.log(result);

// ! 1036
// TODO: 풀이
// let char = prompt("영문자 1개를 입력하시오");
// console.log(char.charCodeAt(0));

// ! 1037
// TODO: 풀이
// let num = Number(prompt("정수 1개를 입력하시오"));
// result = String.fromCharCode(num);
// console.log(result);

// ! 1038
// TODO: 풀이
// let num1 = Number(prompt("첫번째 정수를 입력하세요"));
// let num2 = Number(prompt("두번째 정수를 입력하세요"));
// let result = num1 + num2;
// console.log(result);

// ! 1039
// TODO: 풀이
// let num1 = Number(prompt("첫번째 정수를 입력하세요"));
// let num2 = Number(prompt("두번째 정수를 입력하세요"));
// let result = num1 + num2;
// console.log(result);

// ! 1040
// TODO: 풀이
// let num = Number(prompt("정수를 입력하시오"));
// console.log(-num);

// ! 1041
// TODO: 풀이
// let char = prompt("영문자를 입력하시오");
// charAsci = char.charCodeAt(0) + 1;
// result = String.fromCharCode(charAsci);
// console.log(result);

// ! 1042
// TODO: 풀이
// let a = Number(prompt("첫번째 정수를 입력하세요"));
// let b = Number(prompt("두번째 정수를 입력하세요"));
// console.log((a / b).toFixed(0));

// ! 1043
// TODO: 풀이
// let a = Number(prompt("첫번째 정수를 입력하세요"));
// let b = Number(prompt("두번째 정수를 입력하세요"));
// console.log(a % b);

// ! 1044
// TODO: 풀이
// let num = Number(prompt("정수를 입력하세요"));
// console.log(num + 1);

// ! 1045
// TODO: 풀이
// let num1 = Number(prompt("첫번째 정수를 입력하세요"));
// let num2 = Number(prompt("두번째 정수를 입력하세요"));
// let add = num1 + num2;
// let minus = num1 - num2;
// let mul = num1 * num2;
// let div = (num1 / num2).toFixed(0);
// let rest = num1 % num2;
// let divVelue = (num1 / num2).toFixed(2);

// let result = add + "\n" + minus + "\n" + mul + "\n" + div + "\n" + rest + "\n" + divVelue + "\n";
// console.log(result);

// ! 1046
// TODO: 풀이
// let num1 = Number(prompt("첫번째 정수를 입력하세요"));
// let num2 = Number(prompt("두번째 정수를 입력하세요"));
// let num3 = Number(prompt("세번째 정수를 입력하세요"));
// let sum = num1 + num2 + num3;
// let avg = (sum / 3).toFixed(1);
// console.log(sum + "\n" + avg);

// ! 1047
// TODO: 풀이
// let num = Number(prompt("정수를 입력하세요"));
// console.log(num * 2);

// ! 1048
// TODO: 풀이
// let num1 = Number(prompt("첫번째 정수를 입력하시오"));
// let num2 = Number(prompt("두번째 정수를 입력하시오"));
// let inv = 2 ** num2;
// console.log(num1 * inv);

// ! 1049
// TODO: 풀이
// let a = Number(prompt("첫번째 정수를 입력하시오"));
// let b = Number(prompt("두번째 정수를 입력하시오"));
// if(a > b){
//     console.log("1");
// }else{
//     console.log("0");
// }

// ! 1050
// TODO: 풀이
// let a = Number(prompt("첫번째 정수를 입력하시오"));
// let b = Number(prompt("두번째 정수를 입력하시오"));
// if(a == b){
//     console.log("1");
// }else{
//     console.log("0");
// }

// ! 1051
// TODO: 풀이
// let a = Number(prompt("첫번째 정수를 입력하시오"));
// let b = Number(prompt("두번째 정수를 입력하시오"));
// if(a <= b){
//     console.log("1");
// }else{
//     console.log("0");
// }

// ! 1052
// TODO: 풀이
// let a = Number(prompt("첫번째 정수를 입력하시오"));
// let b = Number(prompt("두번째 정수를 입력하시오"));
// if(a != b){
//     console.log("1");
// }else{
//     console.log("0");
// }

// ! 1053
// TODO: 풀이
// let num = Number(prompt("정수를 입력하시오 단, 0 또는 1만 입력된다."));
// if(num == 0){
//     num = 1;
// }else if(num == 1){
//     num = 0;
// }
// console.log(num);

// ! 1054
// TODO: 풀이
// let num1 = Number(prompt("첫번째 정수를 입력하시오 단, 0 또는 1만 입력된다."));
// let num2 = Number(prompt("두번째 정수를 입력하시오 단, 0 또는 1만 입력된다."));
// let result = 0;
// if(num1 == true && num2 == true){
//     result = 1;
// }else{
//     result = 0;
// }
// console.log(result);

// ! 1055
// TODO: 풀이
// let num1 = Number(prompt("첫번째 정수를 입력하시오 단, 0 또는 1만 입력된다."));
// let num2 = Number(prompt("두번째 정수를 입력하시오 단, 0 또는 1만 입력된다."));
// let result = 0;
// if(num1 == true || num2 == true){
//     result = 1;
// }else{
//     result = 0;
// }
// console.log(result);

// ! 1056
// TODO: 풀이
// let num1 = Number(prompt("첫번째 정수를 입력하시오 단, 0 또는 1만 입력된다."));
// let num2 = Number(prompt("두번째 정수를 입력하시오 단, 0 또는 1만 입력된다."));
// let result = 0;
// if(num1 != num2){
//     result = 1;
// }else{
//     result = 0;
// }
// console.log(result);

// ! 1057
// TODO: 풀이
// let num1 = Number(prompt("첫번째 정수를 입력하시오 단, 0 또는 1만 입력된다."));
// let num2 = Number(prompt("두번째 정수를 입력하시오 단, 0 또는 1만 입력된다."));
// let result = 0;
// if(num1 == num2){
//     result = 1;
// }else{
//     result = 0;
// }
// console.log(result);

// ! 1058
// TODO: 풀이
// let num1 = Number(prompt("첫번째 정수를 입력하시오 단, 0 또는 1만 입력된다."));
// let num2 = Number(prompt("두번째 정수를 입력하시오 단, 0 또는 1만 입력된다."));
// let result = 0;
// if(num1 == false && num2 == false){
//     result = 1;
// }else{
//     result = 0;
// }
// console.log(result);

// ! 1059
// TODO: 풀이
// 방법 1)  //!보류하자
// let num = Number(prompt("정수를 입력하시오"));
// let conver = num.toString(2).padStart(4, '0');
// let result = "";

// for(let i = 0; i < conver.length; i++){
//     if(conver[i] == 0){
//         conver[i] = 1;
//     }else if (conver[i] == 1){
//         conver[i] = 0;
//     }
//     console.log(conver[i]);
//     result = result + conver[i] ;
// }

// console.log(conver[0] + conver[1] + conver[2] + conver[3]);
// console.log(result);

// result = parseInt(conver, 2);

// 방법 2)
// let num = Number(prompt("정수를 입력하시오"));
// console.log(~num);

// ! 1060
// TODO: 풀이
// let num1 = Number(prompt("첫번째 정수를 입력하시오"));
// let num2 = Number(prompt("두번째 정수를 입력하시오"));
// console.log(num1 & num2);

// ! 1061
// TODO: 풀이
// let num1 = Number(prompt("첫번째 정수를 입력하시오"));
// let num2 = Number(prompt("두번째정수를 입력하시오"));
// console.log(num1 | num2);

// ! 1062
// TODO: 풀이
// let num1 = Number(prompt("첫번째 정수를 입력하시오"));
// let num2 = Number(prompt("두번째정수를 입력하시오"));
// console.log(num1 ^ num2);

// ! 1063
// TODO: 풀이
// let num1 = Number(prompt("첫번째 정수를 입력하시오"));
// let num2 = Number(prompt("두번째 정수를 입력하시오"));
// let max = num1 > num2 ? num1 : num2;
// console.log(max);

// ! 1064
// TODO: 풀이
// let num = prompt("세 정수를 입력하시오").split(" ").map(Number);
// let min = ((num[0] > num[1] ? num[1] : num[0]) > num[2] ) ? num[2] :(num[0] > num[1] ? num[1] : num[0]);
// console.log(min);

// ! 1065
// TODO: 풀이
// let num = prompt("세 정수를 입력하시오").split(" ").map(Number);
// for(let i = 0; i < num.length; i++){
//     if(num[i] % 2 == 0){
//         console.log(num[i]);
//     }
// }

// ! 1066
// TODO: 풀이
// let num = prompt("세 정수를 입력하시오").split(" ").map(Number);
// for(let i = 0; i < num.length; i++){
//     if(num[i] % 2 == 0){
//         console.log("even");
//     }else{
//         console.log("odd");
//     }
// }

// ! 1067
// TODO: 풀이
// let num = Number(prompt("정수를 입력하시오"));
// if(num % 2 ==0){
//     if(num > 0){
//         console.log("plus" + "\n" + "even");
//     }else{
//         console.log("minus" + "\n" + "even");
//     }
// }else{
//     if(num < 0){
//         console.log("plus" + "\n" + "odd");
//     }else{
//         console.log("minus" + "\n" + "odd");
//     }
// }

// ! 1068
// TODO: 풀이
// let score = Number(prompt("점수를 입력하시오"));
// if(score >= 90 && score <= 100){
//     console.log("A");
// }else if(score >= 70){
//     console.log("B");
// }else if(score >= 40){
//     console.log("C");
// }else if(score >= 0){
//     console.log("D");
// }

// ! 1069
// TODO: 풀이
// let char = prompt("영문자를 입력하시오");
// switch (char) {
//   case "A":
//     console.log("best!!!");
//     break;
//   case "B":
//     console.log("good!!");
//     break;
//   case "C":
//     console.log("run!");
//     break;
//   case "D":
//     console.log("slowly~");
//     break;
//   default:
//     console.log("what?");
// }

// ! 1070
// TODO: 풀이
// let num = Number(prompt("월을 의미하는 1개의 정수를 입력하시오"));
// switch (num) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("winter");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("spring");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("summer");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("fall");
//     break;
// }

// ! 1071
// TODO: 풀이

// let num = prompt("정수를 개수 상관없이 입력하시오 단, 공백을 넣어주세요")
//   .split(" ")
//   .map(Number);
// let i = 0;
// function zero() {
//   if (num[i] != 0) {
//     console.log(num[i]);
//     i++;
//     return zero();
//   }
// }
// zero();

// ! 1072
// TODO: 풀이
// let count = Number(prompt("반복할 횟수를 입력하세요"));
// let num = prompt("정수를 개수 상관없이 입력하시오 단, 공백을 넣어주세요").split(" ").map(Number);
// let i = 0;
// function repeat() {
//     if(i < count){
//     console.log(num[i]);
//     i++;
//     return repeat();
// }
// }
// repeat();

// ! 1074
// TODO: 풀이
// let num = Number(prompt("정수 1개를 입력하시오"));
// while(num != 0){
//     console.log(num);
//     num--;
// }

// ! 1075
// TODO: 풀이
// let num = Number(prompt("정수 1개를 입력하시오"));
// while(num != 0){
//     console.log(num-1);
//     num--;
// }

// ! 1076
// TODO: 풀이
// let char = prompt("문자 1개를 입력하시오");
// let conver = char.charCodeAt();
// for(let i = 97; i <= conver; i++){
//     console.log(String.fromCharCode(i));
// }

// ! 1077
// TODO: 풀이
// let num = Number(prompt("정수 1개를 입력하시오"));
// for(let i = 0; i <= num; i++){
//     console.log(i);
// }

// ! 1078
// TODO: 풀이
// let num = Number(prompt("정수 1개를 입력하시오"));
// let result = 0;

// for(let i = 1; i <= num; i++){
//     if(i % 2 == 0){
//         result = result + i;
//     }
// }
// console.log(result);

// ! 1079
// TODO: 풀이
// let char = prompt("문자를 개수 상관없이 입력하시오 단, 공백을 넣어주세요").split(" ");
// for(let i = 0; i < char.length; i++){
//     if(char[i] == 'q'){
//         console.log(char[i]);
//         break;
//     }else if(char[i] != 'q'){
//         console.log(char[i]);
//     }
// }

// ! 1080
// TODO: 풀이
// let num = Number(prompt("정수 1개를 입력하시오"));
// let result = 0;
// for(let i = 1; i <= num; i++){
//     result = result + i;
//     if(result >= num){
//         console.log(i);
//         break;
//     }
// }

// ! 1081
// TODO: 풀이
// let num = prompt("정수 2개를 입력하시오 단, 공백을 넣어주세요").split(" ").map(Number);
// for(let j = 1; j <= num[0]; j++){
//     for(let i = 1; i <= num[1]; i++){
//         console.log(j + " " + i);
//     }
// }

// ! 1082
// TODO: 풀이
// let num = prompt("16진수를 입력하시오, 단 A ~ F까지만 입력된다.");
// for(let i = 1; i< 15; i++){
//     console.log((num + "*" + i.toString(16) + "=" +
//     (parseInt(num, 16) * i).toString(16).toUpperCase()))
// }

// ! 1083
// TODO: 풀이
// let num = Number(prompt("10보다 작은 정수 1개를 입력하시오"));
// let result = "";
// for(let i = 1; i <= num; i++){
//     if(i % 3 == 0){
//         result = result + "X" + " ";
//     }else{
//         result = result + i + " ";
//     }
// }
// console.log(result);

// ! 1084
// TODO: 풀이
// let num = prompt("3개의 정수를 입력하시오 [0 ~ 2 까지], 단 공백을 넣어주세요").split(" ").map(Number);
// let count = 0;

// for(let i = 0; i < num[2]; i++){
//     for(let j = 0; j < num[1]; j++){
//         for (let k = 0; k < num[0]; k++){
//             console.log(i + " " + j + " " + k);
//             count++;
//         }
//     }
// }
// console.log(count);

// ! 1085
// TODO: 풀이
// let num = prompt("4개의 정수를 입력하시오, 단 공백을 넣어주세요")
//   .split(" ")
//   .map(Number);
// let range = 0;
// let kb = 1024;
// let mb = 1024 * 1024;
// let gb = 1024 * 1024 * 1024;
// let tb = 1024 * 1024 * 1024 * 1024;

// let space = (num[0] * num[1] * num[2] * num[3]) / 8;
// if (space <= kb) {
//   num = space / kb;
//   num = Math.round(num * 1000) / 1000;
//   console.log(Math.floor(num * 10) / 10 + " " + "kb");
// } else if (space <= mb) {
//   num = space / mb;
//   num = Math.round(num * 1000) / 1000;
//   console.log(Math.floor(num * 10) / 10 + " " + "mb");
// } else if (space <= gb) {
//   num = space / gb;
//   num = Math.round(num * 1000) / 1000;
//   console.log(Math.floor(num * 10) / 10 + " " + "gb");
// } else if (space <= tb) {
//   num = space / tb;
//   num = Math.round(num * 1000) / 1000;
//   console.log(Math.floor(num * 10) / 10 + " " + "tb");
// }

// ! 1086
// TODO: 풀이
// let num = prompt("3개의 정수를 입력하시오, 단 공백을 넣어주세요").split(" ").map(Number);
// let byte = (num[0] * num[1] * num[2]) / 8;
// console.log(byte);
// byte = Math.round(byte * 1000) / 1000;
// console.log(Math.floor(byte * 100) / 100 + " MB");

// ! 1087
// TODO: 풀이
// let num = Number(prompt("정수 1개를 입력하시오"));
// let result = 0;
// for(let i = 1; i <= num; i++){
//     result = result + i;
//     if(num <= result){
//         console.log(result);
//         break;
//     }
// }

// ! 1088
// TODO: 풀이
// let num = Number(prompt("정수 1개를 입력하시오"));
// let result = "";
// for(let i = 1; i <= num; i++){
//     if(i % 3 != 0){
//         result = result + i + " ";
//     }
// }
// console.log(result);

// ! 1089
// TODO: 풀이
// let num = prompt("3개의 정수를 입력하시오, 단 공백을 넣어주세요")
//   .split(" ")
//   .map(Number);
// let a = num[0];
// let result = 0;
// for(let i = 1; i < num[2]; i++){
//     result += num[1];
// }
// console.log(a + result);

// ! 1090
// TODO: 풀이
// let num = prompt("3개의 정수를 입력하시오, 단 공백을 넣어주세요")
//   .split(" ")
//   .map(Number);
// let a = num[0];
// let result = 1;
// for(let i = 1; i < num[2]; i++){
//     result = result * num[1];
// }
// console.log(a * result);

// ! 1091
// TODO: 풀이
// let num = prompt("4개의 정수를 입력하시오, 단 공백을 넣어주세요")
//   .split(" ")
//   .map(Number);
//   let a = num[0];
// for(let i = 1; i < num[3]; i++){
//     a *= num[1];
//     a += num[2];
// }
// console.log(a);

// ! 1092
// TODO: 풀이
// let num = prompt("3개의 정수를 입력하시오, 단 공백을 넣어주세요")
//   .split(" ")
//   .map(Number);
//   let day = 1;
//   while(true){
//     if(day % num[0] == 0 && day % num[1] == 0 && day % num[2] == 0){
//         console.log(day);
//         break;
//     }
//     day++;
//   }

// ! 1093
// TODO: 풀이
// let n = Number(prompt("정수 1개를 입력하시오"));
// let num = prompt("n개의 정수를 입력하시오[1 ~ 24], 단 공백을 넣어주세요")
//   .split(" ")
//   .map(Number);
// let result = "";
// let array = [24];
// let count = 0;
// for (let i = 0; i < n; i++) {
//   if (num[i] == i + 1) {
//     array[i] = count++;
//   }
// }
// for (let j = 0; j < 24; j++) {
//     result = result + array[j] + " ";
// }
// console.log(result);

// ! 1094
// TODO: 풀이

// ! 1095
// TODO: 풀이