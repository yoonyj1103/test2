let num=1;

function nextGallery(){
    num++;
    if(num>9) num=1;
    document.querySelector(".photobox1").src="images/photo"+num+".jpg";
    if(num>9) num=1;
    document.querySelector(".photobox2").src="images/photo"+num+".jpg";
    if(num>9) num=1;
    document.querySelector(".photobox3").src="images/photo"+num+".jpg";
    return;
}

function prevGallery(){
    num--;
    if(num<1) num=9;
    document.querySelector(".photo1").src="images/photo"+num+".jpg";
    num--;
    if(num<1) num=9;
    document.querySelector(".photo2").src="images/photo"+num+".jpg";
    num--;
    if(num<1) num=9;
    document.querySelector(".photo3").src="images/photo"+num+".jpg";
    return;
}