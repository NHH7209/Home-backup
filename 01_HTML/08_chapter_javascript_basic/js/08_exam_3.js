// ================강사님=====================
// 1) 부호를 바꾸어 출력한다.
//  입력 : -1
//  출력 : 1
// let num1 = Number(prompt("숫자1")); // 문자열 -> 숫자로 변경됨
// alert(num1 * -1); // 부호 변경됨 (양수 <-> 음수)

// 2) 입력 : -2147483649
//    출력 : -2147483649
// let num = Number(prompt("숫자1")); // 문자열 -> 숫자로 변경됨
// alert(num);

// 3) 정수 2개 입력된다. a를 b로 나눈 몫을 출력한다.
// 입력 1(a) : 1
// 입력 2(b) : 3
// 출력 : 0
// 힌트 : parseInt(실수) -> 정수, parseInt(문자열) -> 정수
//        .toFixed() : 소수점 자르기
// let num = Number(prompt("숫자1"));
// let num2 = Number(prompt("숫자2"));

// alert(parseInt(num/num2));

// 4) 정수 2개 입력된다. a를 b로 나눈 나머지를 출력한다.
// 입력 1(a): 10
// 입력 2(b): 3
// 출력 : 1
// let num = Number(prompt("숫자1"));
// let num2 = Number(prompt("숫자2"));

// // 나머지 연산자 : %, /(나누기)
// alert(num%num2);

// 5) 입력된 정수에 1을 더해 출력한다.
// 입력 : 2147483647
// 출력 : 2147483648
// let num = Number(prompt("숫자1"));
// alert(num + 1);

// 6) 정수 2개 입력받아 자동 계산하기
// 첫 줄에 합
// 둘째 줄에 차(빼기),
// 셋째 줄에 곱,
// 넷째 줄에 몫,
// 다섯째 줄에 나머지,
// 입력 1: 10
// 입력 2: 3
// 출력 : 13
//   7
//   30
//   3 (정수만 출력)
//   1
// let num = Number(prompt("숫자1"));  // 10
// let num2 = Number(prompt("숫자2")); // 3

// // 합
// let sumVal = num + num2;
// // 차
// let sumVal2 = num - num2;
// // 곱
// let sumVal3 = num * num2;
// // 몫 (정수)
// let sumVal4 = parseInt(num / num2);
// // 나머지
// let sumVal5 = num % num2;
// // 결과 출력
// alert(sumVal + "\n" + sumVal2 + "\n"
//             + sumVal3 + "\n" + sumVal4 + "\n" + sumVal5 + "\n")

// 7) 정수 3개 입력받아 합과 평균 출력하기, (1라인 합, 2라인 평균 출력)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 3
// 출력 : 6
//       2
// 공식 : 합 = 모든 숫자 더하기
//      평균 = 모든숫자합/개수
// let num = Number(prompt("숫자1"));  // 1
// let num2 = Number(prompt("숫자2")); // 2
// let num3 = Number(prompt("숫자3")); // 3

// // 모든 숫자합
// let sumVal = num + num2 + num3; // 6
// // 평균 변수
// let avgVal = sumVal/3; // 2

// // 결과 출력
// alert(sumVal + "\n" + avgVal);

// 8) 정수 1개 입력받아 2배 곱해 출력하기(설명)
// 입력 : 1024
// 출력 : 2048
// let num = Number(prompt("숫자1"));  // 1024
// alert(num * 2);

// 9) 두 정수(a,b) 입력받아 비교하기1(설명)
// a가 b보다 큰 경우 1을, 그렇지 않은 경우 0을 출력한다.
// 입력 1(a): 9
// 입력 2(b): 1
// 출력 : 1
// 조건문
// let num = Number(prompt("숫자1"));  // 9(a)
// let num2 = Number(prompt("숫자2")); // 1(b)

// // 조건문
// if(num > num2) {
//     alert(1);
// } else {
//     alert(0);
// }
// 9) 두 정수 (a,b) 입력받아 비교하기2(설명)
// a와 b의 값이 같은 경우 1을, 그렇지 않은 경우 0을 출력한다.
// 입력 1: 0
// 입력 2: 0
// 출력 : 1
// let num = Number(prompt("숫자1"));  // 0
// let num2 = Number(prompt("숫자2")); // 0

// if(num === num2) {
//     alert(1);
// } else {
//     alert(0);
// }
// 10) // 참 거짓 바꾸기(설명)
// 입력된 값이 0이면 1, 1이면 0을 출력한다.
// (단, 0 또는 1 만 입력된다.)
// let num = Number(prompt("숫자1"));  // 0

// if(num === 0) {
//     alert(1);
// } else {
//     alert(0);
// }

// 11) 정수 3개 입력받아 가장 작은 수 출력하기(설명)
// 가장 작은 값을 출력한다.
// 입력 1: 3
// 입력 2: -1
// 입력 3: 5
// 출력 : -1
// 힌트 : Math.min(값1, 값2....) : 최소값, Math.max(값1, 값2....) : 최대값
// let num = Number(prompt("숫자1"));  // 3
// let num2 = Number(prompt("숫자2"));  // -1
// let num3 = Number(prompt("숫자3"));  // 5

// // 결과 출력 : 최소값 , Math.min(값1, 값2....)
// alert(Math.min(num, num2, num3));

// 12) 정수 3개 입력받아 짝수만 출력하기(설명)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 4
// 출력 : 2
//        4
// 힌트 : % (나머지 연산자) 이용, 어떤수 % 2 -> 1 (홀수), 어떤수 % 2 -> 0(짝수)
// let num = Number(prompt("숫자1"));  // 1
// let num2 = Number(prompt("숫자2"));  // 2
// let num3 = Number(prompt("숫자3"));  // 4

// // 임시 결과 변수
// let result = ""; // 최초 빈문자 초기화

// // 조건문 판단 : num
// if(num % 2 === 0) {
//     // 짝수
//     result = result + num + "\n"; // result(문자열) + num(숫자) == 문자열
// }
// // 조건문 판단 : num
// if(num2 % 2 === 0) {
//     // 짝수
//     result = result + num2 + "\n"; // result(문자열) + num(숫자) == 문자열
// }
// // 조건문 판단 : num
// if(num3 % 2 === 0) {
//     // 짝수
//     result = result + num3 + "\n"; // result(문자열) + num(숫자) == 문자열
// }
// // 결과 출력
// alert(result);

// 13) 정수 3개 입력받아 짝/홀 출력하기(설명)
// odd(홀수), even(짝수)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 8
// 출력 : odd
//       even
//       even
// let num = Number(prompt("숫자1"));  // 1
// let num2 = Number(prompt("숫자2"));  // 2
// let num3 = Number(prompt("숫자3"));  // 8

// // 임시 결과 변수
// let result = ""; // 최초 빈문자 초기화

// // 조건문 : num
// if( num % 2 === 0 ) {
//     // 짝수
//     // TODO: 3) 문자열 붙이기
//     result = result + "even" + "\n";
// } else {
//     // 홀수
//     result = result + "odd" + "\n";
// }

// // 조건문 : num2
// if( num2 % 2 === 0 ) {
//     // 짝수
//     // TODO: 3) 문자열 붙이기
//     result = result + "even" + "\n";
// } else {
//     // 홀수
//     result = result + "odd" + "\n";
// }

// // 조건문 : num3
// if( num3 % 2 === 0 ) {
//     // 짝수
//     // TODO: 3) 문자열 붙이기
//     result = result + "even" + "\n";
// } else {
//     // 홀수
//     result = result + "odd" + "\n";
// }
// // 결과 출력
// alert(result);
// 14) 점수(정수, 0 ~ 100)를 입력받아 평가를 출력해보자.
// 평가 기준
// 점수 범위 : 평가
//  90 ~ 100 : A
//  70 ~   89 : B
//  40 ~   69 : C
//    0 ~   39 : D
// 로 평가되어야 한다.
// 입력 : 73
// 출력 : B
// 힌트 : if/else if/else 문, 논리연산자(&&(논리곱), ||(논리합))
// let num = Number(prompt("정수1")); // 73

// // 조건문 : 논리곱 사용하는 조건문
// if( num >= 90 && num < 100) {
//     alert("A");
// } else if( num >= 70 && num < 90) {
//     alert("B");
// } else if( num >= 40 && num < 70) {
//     alert("C");
// } else if( num >= 0 && num < 40) {
//     alert("D");
// }

// 15) 평가 출력
// 평가 : 내용
// A : best!!!
// B : good!!
// C : run!
// D : slowly~
// 나머지 문자들 : what?
// 입력 : A
// 출력 : best!!!
// let strChar = prompt("문자"); // A

// 조건문
// if(strChar === "A") {
//     alert("best!!!");
// } else if(strChar === "B") {
//     alert("good!!");
// }else if(strChar === "C") {
//     alert("run!");
// }else if(strChar === "D") {
//     alert("slowly~");
// } else {
//     alert("what?");
// }

// 16) 정수 판별
// 양수이면 "양수", 음수이면 "음수", 0이면 0을 출력하시오.
// 힌트 : 입력값 > 0 (양수)
// 입력 : 5
// 출력 : 양수
// let num = Number(prompt("숫자1")); // 5

// // 조건문
// if( num > 0 ) {
//     alert("양수");
// } else if(num < 0) {
//     alert("음수");
// } else {
//     alert("0");
// }


// 17) 비만도 측정 0
// BMI 수치   비만 판정
// ~10 이하   정상
// 11~20 이하   과체중
// 20 초과   비만
// 비만도를 입력받아서 위의 문자열로 출력하세요
// 입력 : 15 
// 출력 : 과체중
// let num = Number(prompt("숫자1")); // 15

// // 조건문
// if(num <= 10) {
//     alert("정상");
// } else if( num >= 11 && num <= 20 ) {
//     alert("과체중");
// } else {
//     alert("비만");
// }

// !============================================
// ==============내가 푼거=======================
// 1) 부호를 바꾸어 출력한다.
// 입력 : -1
// 출력 : 1
// let num = Number(prompt()); // 문자열 -> 숫자로 변경됨
// alert(-num); // 부호 변경됨 (양수 <-> 음수)

// 2) 입력 : -2147483649
//    출력 : -2147483649
// let num = Number(prompt());
// alert(num);

// 3) 정수 2개 입력된다. a를 b로 나눈 몫을 출력한다.
// 입력 1(a) : 1
// 입력 2(b) : 3
// 출력 : 0
// 힌트 : parseInt(실수) -> 정수, parseInt(문자열) -> 정수
// let num1 = Number(prompt());
// let num2 = Number(prompt());
// alert((parseInt)(num1 / num2));

// 4) 정수 2개 입력된다. a를 b로 나눈 나머지를 출력한다.
// 입력 1(a): 10
// 입력 2(b): 3
// 출력 : 1
// let num1 = Number(prompt());
// let num2 = Number(prompt());
// alert(num1 % num2);

// 5) 입력된 정수에 1을 더해 출력한다.
// 입력 : 2147483647
// 출력 : 2147483648
// let num = Number(prompt());
// alert(num + 1);

// 6) 정수 2개 입력받아 자동 계산하기
// 첫 줄에 합
// 둘째 줄에 차(빼기),
// 셋째 줄에 곱,
// 넷째 줄에 몫,
// 다섯째 줄에 나머지,
// 입력 1: 10
// 입력 2: 3
// 출력 : 13
//   7
//   30
//   3
//   1

// let num1 = Number(prompt());
// let num2 = Number(prompt());

// let add = num1 + num2;
// let minus = num1 - num2;
// let mul = num1 * num2;
// let share = num1 / num2;
// let rest = num1 % num2;

// alert(add + "\n" + minus + "\n" + mul + "\n" + share + "\n" + rest)

// 7) 정수 3개 입력받아 합과 평균 출력하기
// 입력 : 1: 1
// 입력 : 2: 2
// 입력 : 3: 3
// 출력 : 6
//       2.0
// 공식 : 합 = 모든 숫자 더하기
// 평균 = 모든 숫자 합 / 개수
// let num1 = Number(prompt());
// let num2 = Number(prompt());
// let num3 = Number(prompt());
// let sum = num1 + num2 + num3;
// alert(sum + "\n" + parseFloat(sum / 3.0));

// 8) 정수 1개 입력받아 2배 곱해 출력하기 (설명)
// 입력 : 1024
// 출력 : 2048
// let num = Number(prompt());
// alert(num * 2);

// 9) 두 정수(a,b) 입력받아 비교하기1(설명)
// a가 b보다 큰 경우 1을, 그렇지 않은 경우 0을 출력한다.
// 입력 1(a): 9
// 입력 2(b): 1
// let a = Number(prompt());
// let b = Number(prompt());
// if (a > b) {1
//   alert("1");
// } else {
//   alert("0");
// }

// 9-2) 두 정수(a,b) 입력받아 비교하기2(설명)
// a가 b보다 큰 경우 1을, 그렇지 않은 경우 0을 출력한다.
// 입력 1: 0
// 입력 2: 0
// 출력 : 1
// let a = Number(prompt());
// let b = Number(prompt());
// if (a == b) {
//   alert("1");
// } else {
//   alert("0");
// }

// 10) // 참 거짓 바꾸기(설명)
// 입력된 값이 0이면 1, 1이면 0을 출력한다.
// (단, 0 또는 1 만 입력된다.)
// let num = Number(prompt());
// if (num == 0) {
//   alert(1);
// } else if (num == 1){
//   alert("0");
// }

// 11) 정수 3개 입력받아 가장 작은 수 출력하기(설명)
// 가장 작은 값을 출력한다.
// 입력 1: 3
// 입력 2: -1
// 입력 3: 5
// 출력 : -1
// let num1 = Number(prompt());
// let num2 = Number(prompt());
// let num3 = Number(prompt());
// let min = Math.min(num1, num2, num3);
// let max = Math.max(num1, num2, num3);

// alert(min);

// let num1 = Number(prompt());
// let num2 = Number(prompt());
// let num3 = Number(prompt());
// let max = -9999999;
// let min = 9999999;

// if(num1 >= max){
//     max = num1;
// }
// if(num2 >= max){
//     max = num2;
// }
// if(num3 >= max){
//     max = num3;
// }

// alert(max);

// 12) 정수 3개 입력받아 짝수만 출력하기(설명)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 4
// 출력 : 2
//        4
// let num1 = Number(prompt());
// let num2 = Number(prompt());
// let num3 = Number(prompt());
// let result = "";

// if (num1 % 2 == 0){
//     result = result + num1 + "\n";
// }
// if (num2 % 2 == 0){
//     result = result + num2 + "\n";
// }
// if (num3 % 2 == 0){
//     result = result + num3 + "\n";
// }
// alert(result);

// 13) 정수 3개 입력받아 짝/홀 출력하기(설명)
// odd(홀수), even(짝수)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 8
// 출력 : odd
//       even
//       even
// let num1 = Number(prompt());
// let num2 = Number(prompt());
// let num3 = Number(prompt());
// let result = "";
// if (num1 % 2 === 0){
//     result = result + "even" + "\n";
// } else{
//     result = result + "odd" + "\n";
// }
// if (num2 % 2 === 0){
//     result = result + "even" + "\n";
// } else{
//     result = result + "odd" + "\n";
// }
// if (num3 % 2 === 0){
//     result = result + "even" + "\n";
// } else{
//     result = result + "odd" + "\n";
// }
// alert(result);
// 비교할때 === 를 추천한다.
// ===는 엄격하게 판단한다.

// 14) 점수(정수, 0 ~ 100)를 입력받아 평가를 출력해보자.
// 평가 기준
// 점수 범위 : 평가
//  90 ~ 100 : A
//  70 ~   89 : B
//  40 ~   69 : C
//    0 ~   39 : D
// 로 평가되어야 한다.
// 입력 : 73
// 출력 : B
// let score = Number(prompt());
// result = "";
// if(score >= 90 && score <=100){
//     result = result + "A";
// }
// else if(score >= 70 && score <=89){
//     result = result + "B";
// }else if(score >= 40 && score <=69){
//     result = result + "C";
// }else if(score >= 0 && score <=39){
//     result = result + "D";
// }
// alert(result);

// 15) 평가 출력
// 평가 : 내용
// A : best!!!
// B : good!!
// C : run!
// D : slowly~
// 나머지 문자들 : what?
// 입력 : A
// 출력 : best!!!
// let num = prompt();
// result = "";

// if (num == 'A') {
//     alert("best!!!");
// } else if (num == 'B') {
//     alert("good!!");
//   }else if (num == 'B') {
//     alert("run!");
//   }else if (num == 'C') {
//     alert("slowly~");
//   }else {
//     alert("what?");
//   }


// 16) 정수 판별
// 양수이면 "양수", 음수이면 "음수", 0이면 0을 출력하시오.
// 힌트 : 입력값 > 0 (양수)
// 입력 : 5
// 출력 : 양수
// let num = prompt();
// if(num > 0){
//     alert("양수");
// }else if(num == 0){
//     alert("0");
// }else if(num < 0){
//     alert("음수")
// }

// 17) 비만도 측정 0
// BMI 수치   비만 판정
// ~10 이하   정상
// 11~20 이하   과체중
// 20 초과   비만
// 비만도를 입력받아서 위의 문자열로 출력하세요
// 입력 : 15 
// 출력 : 과체중

// let num = prompt();
// if(num <= 10){
//     alert("정상");
// }else if(num >= 11 && num <= 20){
//     alert("과체중");
// }else if(num > 20){
//     alert("비만");
// }