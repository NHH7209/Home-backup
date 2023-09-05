// !============TEACHER===============
// 연습문제 1
// 함수를 사용해서 출력하세요
// 입력 : 10
// 출력 : 20
// 함수 정의 : 2nd 형태
// function sumTen(params) {
//     alert(params + 10); 
// }
// // 함수 사용(호출)
// let num = Number(prompt("숫자")); //10
// sumTen(num); // 함수 사용


// 연습문제 2
// 함수를 사용해서 출력하세요.
// 짝수이면 "even" 출력하고, 홀수이면 "odd" 출력하세요.
// 입력 : 2
// 출력 : even
// 함수 정의 : 2nd 형태(매개변수 : O, return : x)
// function name(params) {
//     // params 가 짝수이면
//     if(params % 2 == 0) {
//         alert("even");
//     } else {
//         alert("odd");
//     }
// }
// // 함수 사용
// // 사용법 : 함수명(값);
// let num = Number(prompt("숫자")); //2
// name(num); // 함수 사용

// 연습문제 3
// 함수를 이용해서 아래를 작성하세요.
// 1 ~ 10 까지의 합을 출력하세요.
// 입력 : 10
// 출력 : 55
// 함수 정의 : 2nd 함수 형태(return 없음)
// function name(params) {
//     // 누적합 변수 초기화
//     let sumVal = 0;

//     // params : 끝값(입력된값)
//     for(let i=1;i<=params; i++) {
//         sumVal = sumVal + i; // 누적합(params까지의 누적합)
//     }
//     alert(sumVal); // 결과 출력
// }
// // 함수 사용(호출)
// // 사용법 :  함수명(값);
// let num = Number(prompt("숫자")); //10
// name(num);

// 4) 함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 3
// 출력 : 1
// 최소값 구하기
// 힌트 : Math.min(값, 값2, 값3) : 최소값 구하기
// 함수 정의 : 최소값 구하기 로직(코딩) 들어가야함
// 함수 2nd 형태 (매개변수 있고, return 없는 함수)
// function MyMin(params, params2, params3) {
//     // 최소값 구하는 코딩
//     alert(Math.min(params, params2, params3));
//  }
 
//  // 함수 사용
//  // 사용법 : 함수명(값, 값2, 값3...);
//  let num = Number(prompt("숫자"));   // 1
//  let num2 = Number(prompt("숫자"));  // 2
//  let num3 = Number(prompt("숫자"));  // 3
 
//  MyMin(num,num2,num3); // 함수 사용

// 5) 함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 5의 배수이면 "5의 배수이다" 출력하고,
// 아니면 "5의 배수가 아니다" 라고 출력하세요.
// 입력 : 5
// 출력 : 5의 배수이다.
// 입력값 : 5
// 함수 정의 : 2nd 함수 형태(매개변수 있고, return 없음)
// function MultiFive(params) {
//     // 5의 배수 구하는 코딩하면 됨
//     if(params % 5 == 0) {
//         alert("5의 배수이다.");
//     } else {
//         alert("5의 배수가 아니다.")
//     }
//  }
 
//  // 함수 사용(호출)
//  // 사용법 : 함수명(입력값)
//  let num = Number(prompt("숫자"));   // 5
//  MultiFive(num);

// 6) 함수를 이용해서 코딩하세요
// 3가지 숫자를 입력받아 합계와 평균 구하기
// 입력 : 80
// 입력2 : 90
// 입력3 : 100
// 결과 : 270
//        90
// 함수 정의 : 2nd 형태
// function MyAvg(params, params2, params3) {
//     // 함수안에서 문제를 푸는 코딩을 하면됨
//     // 합계
//     let sumVal = params + params2 + params3;
//     // 평균
//     let avgVal = sumVal/3;
//     // 출력 
//     console.log(sumVal);
//     console.log(avgVal);
// }
// // 함수 사용(호출)
// // 사용법: 함수명(값, 값2, 값3)
// let num = Number(prompt("숫자"));   // 80
// let num2 = Number(prompt("숫자"));   // 90
// let num3 = Number(prompt("숫자"));   // 100

// MyAvg(num, num2, num3); // 함수 사용

// !===========MINE=====================
// 함수 문제 풀이
// 연습문제 1
// 함수를 사용해서 출력하세요
// 입력 : 10
// 출력 : 20

// let num = Number(prompt());
// function print(params){
//     return params * 2;
// }
// alert(print(num));


// 연습문제 2
// 함수를 사용해서 출력하세요.
// 짝수이면 "even" 출력하고, 홀수이면 "odd" 출력하세요.
// 입력 : 2
// 출력 : even
// let num = Number(prompt());
// function print(params){
//     if(params % 2 == 0){
//         return "even";
//     }else{
//         return "odd";
//     }
// }
// alert(print(num));


// 연습문제 3
// 함수를 이용해서 아래를 작성하세요.
// 1 ~ 10 까지의 합을 출력하세요.
// 입력 : 10
// 출력 : 55
// let num = Number(prompt());
// function print(params){
//     let result = 0;
//     for(let i = 1; i <= num; i++){
//         result = result + i;
//     }
//     return result;
// }
// alert(print(num));

// 4) 함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 3
// 출력 : 1
// 최소값 구하기

// let num1 = Number(prompt());
// let num2 = Number(prompt());
// let num3 = Number(prompt());
// function order(n1, n2, n3){
//     let first = Math.min(n1, n2, n3);
//     return first;
// }
// alert(order(num1, num2, num3));


// 5) 함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 5의 배수이면 "5의 배수이다" 출력하고,
// 아니면 "5의 배수가 아니다" 라고 출력하세요.
// 입력 : 5
// 출력 : 5의 배수이다.
// 입력값 : 5

// let num = Number(prompt());
// function MultiFive(n){
//     result = "";
//     if(n % 5 == 0){
//         result = "5의 배수이다."; 
//         return result; 
//     }else{
//         result = "5의 배수가 아니다."; 
//         return result;
//     }
// }
// alert(MultiFive(num));

// 6) 함수를 이용해서 코딩하세요
// 3가지 숫자를 입력받아 합계와 평균 구하기
// 입력 : 80 
// 입력2 : 90
// 입력3 : 100
// 결과 : 270
//        90

// let num1 = Number(prompt());
// let num2 = Number(prompt());
// let num3 = Number(prompt());
// function avg(n1, n2, n3){
//     let sum = n1 + n2 + n3
//     let  ever = sum / 3;
//     alert(sum + "\n" + ever);
// }
// avg(num1, num2, num3);

