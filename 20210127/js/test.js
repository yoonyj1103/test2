function handleNext() {
    const appearSlide = document.querySelector('.appear');
    const disappearSlide = document.querySelector('.disappear');

    if(appearSlide) {
        appearSlide.classList.remove('appear');
        const nextSlide = appearSlide.nextElementSibling;

        if(nextSlide) {
            nextSlide.classList.add('appear');
        } else {
            firstImage.classList.add('appear');
        } 
    } else {
        firstImage.classList.add('appear');
    }

    if(disappearSlide) {
        disappearSlide.classList.remove('disappear');
        const nextSlide = disappearSlide.nextElementSibling;

        if(nextSlide) {
            nextSlide.classList.add('disappear');
        } else {
            firstBottomImage.classList.add('disappear');
        }
    } else {
        firstBottomImage.classList.add('disappear');
    }

}

function handlePrev() {
    const appearSlide = document.querySelector('.appear');
    const disappearSlide = document.querySelector('.disappear');

    if(appearSlide) {
        appearSlide.classList.remove('appear');
        const prevSlide = appearSlide.previousElementSibling;

        if(prevSlide) {
            prevSlide.classList.add('appear');
        } else {
            lastImage.classList.add('appear');
        }
    } else {
        lastImage.classList.add('appear');
    }

    if(disappearSlide) {
        disappearSlide.classList.remove('disappear');
        const prevSlide = disappearSlide.previousElementSibling;

        if(prevSlide) {
            prevSlide.classList.add('disappear');
        } else {
            lastBottomImage.classList.add('disappear');
        }
    } else {
        lastBottomImage.classList.add('disappear');
    }
}