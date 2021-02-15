let today=new Date();
document.write(today+"<br>");

let nowMonth = today.getMonth()+1;
document.write(nowMonth+"<br>");
//월
let nowDay=today.getDay();
document.write(nowDay+"<br>");
//요일

let nowDate = today.getDate();
document.write(nowDate+"<br>");
//일

let nowHour = today.getHours();
document.write(nowHour+"<br>");
//시간

let nowMinute=today.getMinutes();
document.write(nowMinute+"<br>");
//분

let nowSeconds=today.getSeconds();
document.write(nowSeconds+"<br>");
//초

let time = today.getHours();

if(time<12){
    document.write("Good Morning");
} else {
    document.write("good afternoon");
}