let Slide = 1;
showSlide(Slide);

function button_click(num){
  showSlide((Slide += num));
}
function showSlide(num){
  let slides = document.querySelectorAll(".slide");
  if(num> 3){
    Slide =1;
  }if(num< 1){
    Slide = 3;
  }
  for(let i=0; i<3; i++){
    slides[i].style.display="none";
  }
    slides[Slide -1].style.display="block";
}