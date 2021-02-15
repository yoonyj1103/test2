
var num=0;
var colWidth=-1500;
function mvBanner(whichBtn){
    var myBannerList=document.querySelector("photowrap");
    if(whichBtn=="leftBtn"){
        num--;
        if(num<0) num=9;
        var xPos=num*colWidth;
        myBannerList.style.left=xPos+"px"
    }else{
        num++;
        if(num>9) num=0;
        var xPos=num*colWidth;
        myBannerList.style.left=xPos+"px"
    }
    return false
}