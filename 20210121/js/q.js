
let name=prompt("이름을 입력해주세요");
let age=prompt("나이를 입력해주세요");
let hei=prompt("키를 입력해주세요");
let wei=prompt("몸무게 입력해주세요");
let a=age<30;
let b=hei>=160;
let c=wei<50;
let z= a && b && c;

document.querySelector(".name").innerHTML=name;
document.querySelector(".age").innerHTML=age;
document.querySelector(".hei").innerHTML=hei;
document.querySelector(".wei").innerHTML=wei;

function btn() {
    if(z){
        alert("합격");
    }else{
        alert("불합격");}}