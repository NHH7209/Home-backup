// 1) 화살표 함수 (*****)
// 함수 기본
// 1) 매개변수 2개 전달받아서 더하기 함수
// (1) 함수 선언식
// 사용법 : function 함수명(){}
// function sum(a, b){
//     return a + b;
// }

// (2) 함수 표현식
// 사용법 : let 함수명 = function(){};
// let sum = function(a, b){
//     return a + b;
// }

// (3) 화살표 함수 변경
// 목적 : 코딩 단순화(함수 축약형)
// let sum = (a, b) => {return a + b;} 한줄로 작성하면 return을 생략 할 수 있다
// let sum = (a, b) => a + b;

// // 1줄짜리 함수일 경우
// // 예제 함수 선언식 -> 화살표 함수로 바꾸세요
// // 1) 함수 선언식
// function double(n) {
//     return n * 2;
// }

// // 2) 함수 표현식
// let double = function(n) {
//     return n * 2;
// }

// // 3) 화살표 함수(축약형)
// let double = (n) => n * 2;

// // 2줄이상 함수
// function mySum(a, b){
//     let result = a + b;
//     return result;
// }

// // 2) 함수 표현식
// let mySum = function(a, b){
//     let result = a + b;
//     return result;
// }

// // 3) 화살표 함수
// // 두줄 이상일때는 return이 생략이 불가능하다.
// let mySum = (a, b) => {
//     let result = a + b;
//     return result;
// }

// TODO: 요약
// TODO: 1) 1줄짜리 : (x, y, ...) => 실행문;
// TODO: 2) 2줄이상 : (x, y, ...) => {실행문; return 실행문2;}

// 연습문제
// 1) 함수 -> 화살표 바꾸기
// let sum = function(x, y) {
//     return x + y;
// }
// // ! 문제 풀이
// let Sum = (x, y) => x + y;

// // 2) 함수 -> 화살표 바꾸기
// // let pow = function(x){
// //     return x * x;
// // }

// // ! 문제 풀이
// let Pow = (x) => x * x;

// // 3) 함수 -> 화살표
// // let sysHi = function() {
// //     console.log("안녕하세요");
// // }

// // ! 문제풀이
// let SysHi = () => console.log("안녕하세요");

// // 4) 함수 -> 화살표
// // function hello(name){
// //     console.log('hello', + name + '!');
// // }

// // ! 문제풀이
// let Hello = (name) => console.log('hello', + name + '!');

// // 5) 함수 -> 화살표
// // function fun2() {
// //   let call = prompt("이름이 뭐니~?", "");
// //   return alert(call + "~! 반갑다~!");
// // }

// // ! 문제풀이
// let Fun2 = () => {
//     let call = prompt('이름이 뭐니~?','');
//     return alert(call + '~! 반갑다~!');
// }

// 6) 화살표 함수로 바꾸기
function checkAge(age) {
  if (age > 20) {
    alert("성인입니다.");
  } else if (age > 15) {
    alert("청소년입니다");
  } else {
    alert("어린이입니다.");
  }
}
checkAge(21);

let Checkage = (age) => {
    if (age > 20) {
        alert("성인입니다.");
      } else if (age > 15) {
        alert("청소년입니다");
      } else {
        alert("어린이입니다.");
      }
    };
    
    checkAge(21);