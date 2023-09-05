// !==============TEACHER==================
// // 함수 정의
// function setToggle() {
//     // 선택함수 : #content
//     let content = document.querySelector("#content");

//     // .dark 클래스 있는지 확인
//     if(content.classList.contains("dark") == true) {
//         // .light 클래스 추가 (add() , toggle())
//         content.classList.toggle("light");
//     } else {
//         // .dark 클래스 추가
//         content.classList.toggle("dark");
//     }
// }


// !=================MINE=================
function setToggle(){
    let content = document.querySelector("#content");
    let result = content.classList.contains("dark");
    if(result == true){
        content.classList.toggle("light");
        content.classList.remove("dark");
        console.log("Result", result);
    }else{
        content.classList.toggle("dark");
        console.log("Result", result);
    }
}
