let theText1="photo1.jpg";

theText1=theText1.replace("out","over");
document.write(theText1+"<br>");
//문자 치환 (변경)

let theText2="images/img10.jpg";
theText2=theText2.split("/")[1];
//img10.jpg "/"를 기준점으로 단어별
theText2=theText2.substring(3);
//10.jpg 앞에 기준점으로 3개
theText2=parseInt(theText2);
//10 문자열을 숫자로만 출력
document.write(theText2+"<br>");

let theText3="hello javascript";
var lastIndex=theText3.length-1;
// 글자수만큼 숫자로 변환
theText3=theText3.charAt(lastIndex);
//공백생략 (length 랑 세트)
document.write(theText3+"<br>");

let theText4="tel phone now home";
let findIndex=theText4.indexOf("mobile");
if(findIndex<0){
    document.write("테스트에 찾는 문자가 없습니다.");
}else{
    document.write("텍스트에 찾는 문자가 포함되어 있습니다.");
}
//비밀번호 길이제한에 주로 씀 / https://webisfree.com/2015-06-22/[자바스크립트]-배열-또는-문자열에-indexof()-사용한-특정-문자-검색

