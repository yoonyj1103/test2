// let today=new Date();
// 년, 월, 일, 시간, 분, 초, 요일
// let nowDay=today.getDay();
// 요일

// if(nowDay==1){
//     document.write('<img src="images/photo1.jpg" alt="월요일" >');
// }else if(nowDay==2){
//     document.write('<img src="images/photo2.jpg" alt="화요일" >');
// }else if(nowDay==3){
//     document.write('<img src="images/photo3.jpg" alt="수요일" >');
// }else if(nowDay==4){
//     document.write('<img src="images/photo4.jpg" alt="목요일" >');
// }else if(nowDay==5){
//     document.write('<img src="images/photo5.jpg" alt="금요일" >');
// }else if(nowDay==6){
//     document.write('<img src="images/photo6.jpg" alt="토요일" >');
// }else{
//     document.write('<img src="images/photo7.jpg" alt="일요일" >');
// }





// math

let MaxNum=Math.max(30,75,200,0.12);
document.write(MaxNum+"<br>");
// 최대
let minNum=Math.min(30,75,200,0.12);
document.write(minNum+"<br>");
//최소
let roundNum=Math.round(3.5);
document.write(roundNum+"<br>");
//반올림
let ceilNum=Math.ceil(5.1);
document.write(ceilNum+"<br>");
//소수점올림
let floorNum=Math.floor(10.5);
document.write(floorNum+"<br>");
//
let absNum=Math.abs(-10);
document.write(absNum+"<br>");
//
let ranNum=Math.random();
document.write(ranNum+"<br>");

let ranNum2=Math.round(Math.random()*45);
document.querySelector('#ran').innerHTML=ranNum2;

let ranNum3=Math.round(Math.random()*45);
document.querySelector('#ran2').innerHTML=ranNum3;

let ranNum4=Math.round(Math.random()*45);
document.querySelector('#ran3').innerHTML=ranNum4;

let ranNum5=Math.round(Math.random()*45);
document.querySelector('#ran4').innerHTML=ranNum5;

let ranNum6=Math.round(Math.random()*45);
document.querySelector('#ran5').innerHTML=ranNum6;

let ranNum7=Math.round(Math.random()*45);
document.querySelector('#ran6').innerHTML=ranNum7;
