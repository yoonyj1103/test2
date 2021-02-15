// let num1=10;

// function theFnc(num2){
//     let sum=num1+num2;
//     // 10+ ?
//     let mu1=num1*num2;
//     // 10 * ??
//     return sum;
// }

// let result=theFnc(40);
// document.write(result+"<br>");

// // -----------------------------


// var i=0;
// function theTest(){
//     i++;
//     document.write("안녕하세요"+i+"<br>");
//     if(i<10) theTest();
// }

// theTest();
// document.querySelector('.test').
// innerHTML=theTest();

function theFun(){
    // let num; 렛을 사용하면 지역변수로 지정해주는 것
    num=30;
}
theFun();
document.write(num);

//전역변수

// function theFun2(){
//     let num2;
//     num2=20;
// }
// the function();
// document.write(num2);
//지역내에서만 선언

let num3=20;
let i=10;
function theTest(){
    let num3=i+200;
    alert(num3);
}
theTest();