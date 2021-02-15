let name=new Array();
name[0]="강부자";
name[1]="김유아";
name[2]="최혁수";
name[3]="방시혁";
name[4]="장영주";
name[5]="은비까비";
name[6]="유경상";

document.write(name[3]+"<br>");

// ----------------------------------------

var days=new Array("일","월", "화", "수", "목", "금","토")

var today=new Date();
var yoil=days[today.getDay()];

document.write(yoil+"<br>");

// ----------------------------------------

let money=[100,100,200,50];
let theLen=money.length;

// document.write(theLen+"<br>");
var total=0;
for(let i=0; i<theLen; i++){
    total=total+money[i];
}
document.write(total);

// 엑셀 sum이랑 비슷
//----------------------------------------