// !===============TEACHER===============
// 문제 풀이
// 1) 입력 받기 : "y"
// let charVal = prompt("글자");

// if(charVal === "y") {
//     // 글쓰기 버튼 추가
//     document.querySelector("#app").innerHTML = "<button>글쓰기</button>";
// } else {
//     // 글수정 버튼 추가
//     document.querySelector("#app").innerHTML = "<button>글수정</button>";
// }

// !=================MINE=================
// 1) 입력받기
let str = prompt();

if(str == 'y'){
    // 글쓰기 버튼 추가
    document.querySelector("#app").innerHTML = "<button>글쓰기</button>"
}else {
    // 글수정 버튼 추가
    document.querySelector("#app").innerHTML = "<button>글수정</button>"
}