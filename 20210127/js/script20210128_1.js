let num=1;

function nextGallery(){
    num++;
    if(num>7) num=1;
    document.getElementById("gallery").src="images/photo"+num+".jpg";
    // return false;
}

function prevGallery(){
    num--;
    if(num<1) num=7;
    document.getElementById("gallery").src="images/photo"+num+".jpg";
    // return false;
}