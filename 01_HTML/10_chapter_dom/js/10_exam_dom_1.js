// !==============TEACHER=================
// function innerhtml() {
//     // 현재 시간 가져오기
//     let now = new Date();

//     // innerHTML 에 출력
//     document.querySelector("#output")
//         .innerHTML = now
// }
// !==============MINE======================

function innerhtml() {
    // 현재 시간 가져오기
    let time = new Date();

    let hour = time.getHours(); //시
    let minute = time.getMinutes(); //분
    let second = time.getSeconds(); //초

    let result = hour + " " + minute + " " + second;
    // innerHTML 에 출력
    document.querySelector("#output")
        .innerHTML = result;
}
