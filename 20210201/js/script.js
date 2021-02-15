
var num=0;
var colWidth=-400;
function mvBanner(whichBtn){
    var myBannerList=document.getElementById("bannerList");
    if(whichBtn=="leftBtn"){
        num--;
        if(num<0) num=1;
        var xPos=num*colWidth;
        myBannerList.style.left=xPos+"px"
    }else{
        num++;
        if(num>1) num=0;
        var xPos=num*colWidth;
        myBannerList.style.left=xPos+"px"
    }
    return false
}