// !=================TEACHER=======================
// 힌트 :
// 합계 : 국어(kor) + 영어(eng) + 수학(math) = sumVal
// 평균 : sumVal / 3  = avgVal
// innerHTML 속성 이용
// id="kor" 위치에 국어(kor) 출력
// id="eng" 위치에 영어(eng) 출력
// id="math" 위치에 수학(math) 출력
// id="sum" 위치에 합계(sumVal) 출력
// id="avg" 위치에 평균(avgVal) 출력
// function sum_avg(kor, eng, math) {
//     let sumVal = kor + eng + math; // 합계 (80 + 90 + 100)
//     let avgVal = sumVal / 3; // 평균

//     // id="kor" 위치에 국어(kor) 출력
//     document.querySelector("#kor").innerHTML = kor; // 국어 점수
//     document.querySelector("#eng").innerHTML = eng; // 영어 점수
//     document.querySelector("#math").innerHTML = math; // 수학 점수
//     document.querySelector("#sum").innerHTML = sumVal; // 합계
//     document.querySelector("#avg").innerHTML = avgVal; // 평균

// }

// !=================MINE===========================
function sum_avg(num1, num2, num3){
    let add = num1 + num2 + num3;
    let avg = add / 3; 
    document.querySelector("#kor").innerHTML = num1;
    document.querySelector("#eng").innerHTML = num2;
    document.querySelector("#math").innerHTML = num3;
    document.querySelector("#sum").innerHTML = add;
    document.querySelector("#avg").innerHTML = avg;
}
