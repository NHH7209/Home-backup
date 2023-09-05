// ! 1110
// 예제) 
// 입력받은 정수를 그대로 출력한다.
// (scanf앞에 불필요한 안내 문구를 출력하지 않도록 합니다.)

// 입력 : 정수를 하나 입력받는다.
// 출력 : 입력받은 정수를 출력한다.

// TODO: 풀이
// let num = Number(prompt("정수를 입력하세요"));
// console.log(num);

// ! 1111
// 예제)
// 어떤 정수가 입력되면 %를 붙여 출력하시오.

// 입력 : 정수 하나가 입력된다.(범위: 0 ~ 100)
// 출력 : 입력된 정수에 %를 붙여 출력한다.

// TODO: 풀이
// let num = Number(prompt("정수를 입력하시오"));
// console.log(num + "%");

// ! 1112
// 예제)
// 입력 받은 두 정수를 출력한다.

// 입력 : 두 정수를 차례대로 입력받는다.
// 출력 : 입력받은 순서대로 출력한다.

// TODO: 풀이
// let num1 = Number(prompt("첫 번째 정수를 입력하시오"));
// let num2 = Number(prompt("두 번째 정수를 입력하시오"));
// result = num1 + " " + num2;
// console.log(result);


// ! 1113
// 예제) 
// 두 정수를 입력받아 순서를 바꿔서 출력하시오.

// 입력 : 두 정수를 입력받는다.
// 출력 : 순서를 바꿔서 출력한다.

// TODO: 풀이
// let num1 = Number(prompt("첫 번째 정수를 입력하시오"));
// let num2 = Number(prompt("두 번째 정수를 입력하시오"));
// console.log(num2 + " " +num1);

// ! 1114
// 예제)
// 두 정수를 입력받아 합을 출력한다.

// 입력 : 두 정수를 입력받는다.
// 출력 : 두 정수의 합을 출력한다.

// TODO: 풀이
// let num1 = Number(prompt("첫 번째 정수를 입력하시오"));
// let num2 = Number(prompt("두 번째 정수를 입력하시오"));
// console.log(num1 + num2);

// ! 1115
// 예제)
// 두 정수의 덧셈의 결과를 출력한다.
// 두 수는 int 범위를 넘어선 64비트 정수형 값이다.

// 입력 : 두 정수 a, b가 입력된다. (-263 <= a+b <= 263-1)
// 출력 : 두 정수의 합을 출력한다.

// TODO: 풀이
// let num1 = Number(prompt("첫 번째 정수를 입력하시오"));
// let num2 = Number(prompt("두 번째 정수를 입력하시오"));
// console.log(num1 + num2);

// ! 1116
// 예제)
// 두 정수를 입력받아 아래와 같이 출력하시오.

// 예)  3 2
// 3+2=5
// 3-2=1
// 3*2=6
// 3/2=1

// 입력 : 두 정수 a, b를 입력받는다.
// 출력 : a와 b에 대한 사칙연산 결과를 양식에 맞추어 출력한다.

// TODO: 풀이
// let num1 = Number(prompt("첫 번째 정수를 입력하시오"));
// let num2 = Number(prompt("두 번째 정수를 입력하시오"));
// let add = num1 + num2;
// let minus = num1 - num2;
// let gob = num1 * num2;
// let nanu = num1 / num2;

// result = num1 + " + " + num2 + " = " + add + "\n" +
// num1 + " - " + num2 + " = " + minus + "\n" + 
// num1 + " * " + num2 + " = " + gob + "\n" + 
// num1 + " / " + num2 + " = " + nanu;
// console.log(result)

// ! 1117
// 예제) 
// 두 실수를 입력받아 두 실수의 곱을 출력하되 
// 소수 둘째자리까지 출력하시오.

// 입력 : 두 실수를 입력받는다.
// 출력 : 두 실수의 곱을 소수 둘째자리까지 출력한다.

// // TODO: 풀이
// let num1 = Number(prompt("첫 번째 실수를 입력하시오"));
// let num2 = Number(prompt("두 번째 실수를 입력하시오"));
// result = (num1 * num2).toFixed(2);
// console.log(result)


// ! 1118
// 예제)
// 삼각형의 넓이를 구하는 프로그램을 작성한다.
// 삼각형의 넓이 = 밑변 * 높이 / 2

// 입력 : 밑변(a)과 높이(b)가 정수로 입력된다.
// 출력 : 삼각형의 넓이를 소수 첫째자리까지 출력한다.

// TODO: 풀이
// let num1 = Number(prompt("밑변의 길"));
// let num2 = Number(prompt("두 번째 실수를 입력하시오"));
// result = (num1 * num2 / 2).toFixed(1);
// console.log(result);

// ! 1119
// 예제)
// 하루는 24시간이다.
// 일(day)이 입력으로 주어지면 시간으로 변환하시오.

// 입력 : 일(day)이 입력된다.
// 출력 : 시간으로 변환해서 출력한다.

// TODO: 풀이
// let day = Number(prompt("day를 입력하시오"));
// let hour = day * 24;
// console.log(hour);

// ! 1120
// 예제)
// 세 정수가 입력되면 평균을 출력하시오.

// 입력 : 세 정수가 입력된다.
// 출력 : 세 수의 평균을 소수 둘째자리까지 출력하시오.

// TODO: 풀이
// let num1 = Number(prompt("첫번째 정수를 입력하세요"));
// let num2 = Number(prompt("두번째 정수를 입력하세요"));
// let num3 = Number(prompt("세번째 정수를 입력하세요"));
// let result = ((num1 + num2 + num3) / 3).toFixed(2);
// console.log(result);

// ! 1121
// 예제)
// 정수 계산에서 나머지를 구하시오.=
// 예를 들어 7 / 5 의 나머지는 2입니다.

// 입력 : 두 정수 a, b를 입력받는다.
// a는 피제수, b는 제수를 나타낸다.
// 예) 7 5 가 입력되었다면  ====>   7  /  5 를 뜻함
// 출력 : 나머지를 출력한다.

// TODO: 풀이
// let a = Number(prompt("첫번째 정수를 입력하시오"));
// let b = Number(prompt("두번째 정수를 입력하시오"));
// let result = a % b;
// console.log(result);

// ! 1122
// 예제)
// 초를 입력받아 분 / 초의 형태로 출력하시오.

// 입력 : 초가 입력된다.(자연수)
// 출력 : 분, 초 순서로 출력한다.

// TODO: 풀이
// let num = Number(prompt("초를 입력하시오"));
// let minute = (num / 60).toFixed(0);;
// let second = num % 60;
// let result = minute + " " + second;

// console.log(result);

// ! 1123
// 예제)
// 섭씨 온도가 입력되면 화씨 온도로 변환하시오.
// 화씨 온도 = 9 / 5 * 섭씨온도 + 32

// 입력 : 섭씨 온도가 입력된다. (정수)
// 출력 : 화씨온도를 소수 셋째자리 까지 출력한다. (실수)

// TODO: 풀이
// let num = Number(prompt("화씨 온도를 입력하시오"));
// let temperature = (9 / 5 * num) + 32;
// let result = temperature.toFixed(3);

// console.log(result);
