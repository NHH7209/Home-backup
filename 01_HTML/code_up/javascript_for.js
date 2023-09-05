// 1251번 문제
// let moon = ""

// for(let i = 1; i <= 100; i++){
//     moon = moon + i + " "
// }

// console.log(moon)

// 1252번 문제
// let inte1 = Number(prompt("정수를 입력하세요")) // 5 입력
// let moon1 = ""

// for(let i = 1; i <= inte1; i++){
//     moon1 = moon1+ i + " "
// }

// console.log(moon1)

// 1253번 문제
// let inte2 = prompt("두개의 정수를 입력하세요").split(" ").map(Number) // 3 8 입력
// let moon2 = ""

// for(let i = Math.min(inte2[0],inte2[1]); i <= Math.max(inte2[0],inte2[1]); i++){
//     moon2 = moon2+ i + " "
// }

// console.log(moon2)

// 1254번 문제
// let char = prompt("두개의 알파벳을 입력하세요").split(" ") // d g 입력
// let change = char[0].charCodeAt()
// let change2 = char[1].charCodeAt()
// let str = "";	

// for (let i = change; i <= change2; i++) {
    
//     str += String.fromCharCode(i) + " "
// }

// console.log(str);

// 1255번 문제
// let count = prompt("두 실수를 입력하세요").split(" ") // 2.00 2.03 입력
// let chacount = parseFloat(count[0])
// let chacount2 = parseFloat(count[1])
// let result = ""
// for(let i = chacount; i <= chacount2; i+=0.01){
//     result += i.toFixed(2) + " "
// }
// console.log(result)

// 1256번 문제
// let star = Number(prompt("정수를 입력하세요")) // 5 입력
// let starre = ""
// for(let i = 1; i <= star; i++){
//     starre += "*"
// }
// console.log(starre)

// 1257번 문제
// let odd = prompt("두 정수를 입력하세요").split(" ").map(Number) // 2 7 입력
// let resultodd = ""
// for(let i = odd[0]; i <= odd[1]; i++){
//     if ((i % 2) != 0) {
//         resultodd += i + " "
//     }
// }
// console.log(resultodd)

// 1258번 문제
// let hun = Number(prompt("정수를 입력하세요")) // 100 입력
// let sum = 0
// for(let s = 1; s <= hun; s++){
//     sum += s
// }
// console.log(sum)

// 1259번 문제
// let five = Number(prompt("정수를 입력하세요")) // 5 입력
// let result1 = 0;
// for (let i = 1; i <= five; i++) {
//   if (i % 2 == 0) { 
//     result1 += i; 
//   }
// }
// console.log(result1)

// 1260번 문제
// let three = prompt("두개의 정수를 입력하세요").split(" ").map(Number) // 3 7 입력
// let result2 = 0;
// for (let z = three[0]; z <= three[1]; z++) {
//   if (z % 3 == 0) {
//     result2 += z;
//   }
// }
// console.log(result2)

// 1261번 문제
// let int = prompt("문자를 입력하세요").split(" ").map(Number); // 1 2 3 4 5 6 7 8 9 10 입력
// let count = 0;
// for(let z = 0; z < int.length; z++) {
//     if(int[z]%5 == 0){
//         console.log(int[z]);
//         count += 1;
//         break;
//     }
// }
// if(count == 0){
//     console.log(0)
// }

// 1265번 문제
// let counting = Number(prompt("정수를 입력하세요")) // 3 입력
// let result = ""
// for(let i = 1; i<=9; i++){
//     result = (counting+"*"+i+"="+(counting*i))+"\n"
//     console.log(result)
// }

// 1266번 문제
// let ran = Number(prompt("정수를 입력하세요")) // 5 입력
// let sum = 0
// for(let i = 1; i<=ran; i++){
//     let random = (Math.floor(Math.random() * 100) + 1)
//     sum += random
// }
// console.log(sum)

// 1267번 문제
// let ran = Number(prompt("정수를 입력하세요")) // 5 입력
// let sum = 0
// for (let i = 1; i <= ran; i++) {
//     let random = (Math.floor(Math.random() * 1000) + 1)
//     if (random % 5 == 0) {
//         sum += random
//     }
// }
// console.log(sum)

// 1268번 문제
// let ran = Number(prompt("정수를 입력하세요")) // 5 입력
// let sum = 0
// for (let i = 1; i <= ran; i++) {
//     let random = (Math.floor(Math.random() * 100) + 1)
//     if (random % 2 != 0) {
//         sum += 1
//     }
// }
// console.log(sum)

// 1269번 문제
// let ran = prompt("네개의 정수를 입력하세요").split(" ").map(Number) // 2 -1 3 5 입력
// let sum = 0
// for (let i = 1; i <= ran[3]; i++) {
//     if (i == 1) {
//         sum = ran[0]
//     } else{
//         sum = (sum * ran[1]) + ran[2]
//     }
// }
// console.log(sum)

// 1270번 문제
// let one = Number(prompt("정수를 입력하세요")) // 35입력
// let cut = 0
// for(let i = 1; i<=one; i++){
//     if(i%10 == 1){
//         cut += 1
//     }
// }
// console.log(cut)

// 1271번 문제
// let ran = Number(prompt("정수를 입력하세요")) // 5 입력
// let sum = 0
// for(let i = 1; i<=ran; i++){
//     let random = (Math.floor(Math.random() * 1000000) + 1)
//     sum = Math.max(random)
// }
// console.log(sum)

// 1272번 문제
// let ran = prompt("두개의 정수를 입력하세요").split(" ").map(Number) // 1 2 입력
// let k = ran[0];
// let h = ran[1];
// let a = 0
// let b = 0
// if (k % 2 == 0) {
//     a = (k / 2) * 10
// }
// if (k % 2 != 0) {
//     a = (k + 1) / 2;
// }
// if (h % 2 == 0) {
//     b = (h / 2) * 10;
// }
// if (h % 2 != 0) {
//     b = (h + 1) / 2;
// }
// console.log(a+b)

// 1273번 문제
// let yak = Number(prompt("정수를 입력하세요")) // 6 입력
// let result = ""
// for(let i = 1; i <= yak; i++){
//     if(yak % i == 0){
//         result += i + " "
//     }
// }
// console.log(result)

// 1274번 문제
// let n = Number(prompt("정수를 입력해 주세요")); // 7 입력
// let i = 2;
// while (i < n) {
//     if (n % i == 0)
//         break;
//     i++;
// }
// if (i == n)
//     console.log("prime")
// else
//     console.log("not prime")

// 1275번 문제
// let power = prompt("두개의 정수를 입력해주세요").split(" ").map(Number) // 3 3 입력
// let sum = Math.pow(power[0], power[1])
// console.log(sum)

// 1276번 문제
// let fact = Number(prompt("정수를 입력해주세요")) // 5 입력
// let sum = 1
// for(let i = 0; i < fact; i++){
//     sum = (fact - i)*sum
// }
// console.log(sum)

// 1277번 문제
// let ran = Number(prompt("정수를 입력하세요")) // 7 입력
// let sum = ""
// let sum1 = ""
// let sum2 = ""

// if (ran % 2 != 0) {
//     for (let i = 1; i <= ran; i++) {
//         let random = (Math.floor(Math.random() * ran) + 1)
//         if (i == 1) {
//             sum = sum + random + " "
//         }
//         if ((1 + ran) / 2 == i) {
//             sum1 = sum + random + " "
//         }
//         if (i == ran) {
//             sum2 = sum1 + random + " "
//         }
//         console.log(random)
//     }
// }
// console.log(sum2)

// 1278번 문제
// let counter = Number(prompt("정수를 입력하세요")) // 932 입력
// let count = 0
// for(let d = 1; d <= counter; d*=10){
// if(counter/(d) > 0){
//     count = count + 1
// }
// }
// console.log(count)

// 1279번 문제
// let counto = prompt("두개의 정수를 입력하세요").split(" ").map(Number) // 5 10 입력
// let minc = Math.min(counto[0],counto[1])
// let maxc = Math.max(counto[0],counto[1])
// let sumc = 0
// for(let r = minc; r <= maxc; r++){
//     if(r%2 != 0){
//         sumc = sumc + r
//     } else {
//         sumc = sumc - r
//     }
// }
// console.log(sumc)

// 1280번 문제 - 임시 방편. 오류있음(출력값은 정상)
// let counto = prompt("두개의 정수를 입력하세요").split(" ").map(Number) // 5 7 입력
// let minc = Math.min(counto[0],counto[1])
// let maxc = Math.max(counto[0],counto[1])
// let cc = 0
// let resultc = ""
// let resultb = ""
// let results = ""
// let resultx = ""

// for(let r = minc; r <= maxc; r++){
//     if(r%2 != 0){
//         cc = cc + r
//         resultc = "+" + r
//         console.log(resultc)
//     } else {
//         cc = cc - r
//         resultb = "-" + r
//         console.log(resultb)
//         results = resultc + resultb
//     }
//     resultx = results + resultc
// }
// console.log(resultx + "=" + cc)

// 1281번 문제 - 임시 방편. 오류있음(출력값은 정상)
// let counto = prompt("두개의 정수를 입력하세요").split(" ").map(Number) // 5 7 입력
// let minc = Math.min(counto[0],counto[1])
// let maxc = Math.max(counto[0],counto[1])
// let cc = 0
// let resultc = ""
// let resultb = ""
// let results = ""
// let resultx = ""

// for(let r = minc; r <= maxc; r++){
//     if(r%2 != 0){
//         cc = cc + r
//         if(r != minc){
//         resultc = "+" + r}
//         else{
//             resultc += r
//         }
//         console.log(resultc)
//     } else {
//         cc = cc - r
//         resultb = "-" + r
//         console.log(resultb)
//         results = resultc + resultb
//     }

//     resultx = results + resultc
// }
// console.log(resultx + "=" + cc)

// 1282번 문제
// let sqrt = Number(prompt("정수를 입력하세요")) // 34 입력
// let counts = 0
// let pows = 0
// let mun = ""
// counts = Math.floor(Math.sqrt(sqrt))
// pows = sqrt - Math.pow(counts, 2)
// mun = mun + pows + " "+ counts
// console.log(mun)

// 1283번 문제
// let inv = Number(prompt("금액을 입력하세요")) // 10000 입력
// let day = Number(prompt("날짜를 입력하세요")) // 4 입력

// let sum = 0
// for (let i = 1; i <= day; i++) {
// let random = (Math.round(Math.random() * 201) - 100)
// sum = Math.round(inv * random)
// }
// console.log(sum)
// if(sum - inv > 0){
// console.log("good")
// } else if(sum - inv == 0){
// console.log("same")
// } else{
// console.log("bad")
// }

// 1284번 문제 - 오류.임시방편
// let coun = Number(prompt("정수를 입력하세요")) // 21 입력
// let so1 = 0
// let so2 = 0
// let sumso = ""
// for(let i = 2; i < coun; i++){
//     if(coun%i == 0){
//         so1 = i
//         break
//     }
// }
// for(let z = (so1+1); z < coun; z++){
//     if(coun%z == 0){
//         so2 = z
//         break
//     }
// }

// sumso = so1 + " " + so2
// console.log(sumso)

// 1286번 문제
// let maxx1 = Number(prompt("정수를 입력하세요"))
// let maxx2 = Number(prompt("정수를 입력하세요"))
// let maxx3 = Number(prompt("정수를 입력하세요"))
// let maxx4 = Number(prompt("정수를 입력하세요"))
// let maxx5 = Number(prompt("정수를 입력하세요"))

// let maxx = 0
// let minx = 0

// maxx = Math.max(maxx1, maxx2, maxx3, maxx4, maxx5) 
// minx = Math.min(maxx1, maxx2, maxx3, maxx4, maxx5)
// console.log(maxx)
// console.log(minx)

// 1294번 문제 - 못풂


// 1295번 문제
// const str = prompt("문자열을 입력하세요") 
// let arr = [];
// let fins

// for (let i = 0; i < str.length; i++) {
// 	if (str[i] === str[i].toUpperCase()) {
// 		arr.push(str[i].toLowerCase());
// 	} else {
// 		arr.push(str[i].toUpperCase());
// 	}
// }
// fins = arr.join("");

// console.log(fins)

// 1675번 문제 - 못풂