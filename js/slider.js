const slides = document.querySelectorAll('.swiper-slide');
const bullets = document.querySelectorAll('.swiper-pagination-bullet');
const leftArrow = document.querySelector('.swiper-arrow-left');
const rightArrow = document.querySelector('.swiper-arrow-right');
let currentIndex = 0;
const totalSlides = slides.length;
let slideInterval;

function changeSlide(index) {
    slides[currentIndex].classList.remove('active');
    bullets[currentIndex].classList.remove('active');

    slides[index].classList.add('active');
    bullets[index].classList.add('active');

    currentIndex = index;
    resetAutoSlide();
}

function autoSlide() {
    let nextIndex = (currentIndex + 1) % totalSlides;
    changeSlide(nextIndex);
}

function startAutoSlide() {
    slideInterval = setInterval(autoSlide, 3000);
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => changeSlide(index));
});

leftArrow.addEventListener('click', () => {
    console.log('Left arrow clicked'); 
    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    changeSlide(prevIndex);
});

rightArrow.addEventListener('click', () => {
    console.log('Right arrow clicked');  
    const nextIndex = (currentIndex + 1) % totalSlides;
    changeSlide(nextIndex);
});

startAutoSlide();
changeSlide(currentIndex);
