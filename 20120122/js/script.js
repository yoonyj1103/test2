// var result;
// var dan=2;

// document.write("<h1>+dan+</h1>");

// for(var k=1; k<=9; k++){
//     result = k*dan;
//     document.write("2X"+k+"="+result+"<br>")
// }

var dan=prompt("숫자만 입력하세요");
var result;

for(let num=1; num<=9; num++){
    result =dan*num;
    document.write(dan+"X"+num+"="+result+"<br>");
}


for(let y=1; y<=10; y++){
    if(y%2==1) continue;
    document.write(y+"<br>"); 
    if(y==5) break;
}

//continue 문? 실행문을 수행하지 않고 바로 증감식으로 돌아가 실행을 반복하게 됩니다.