
// Simple Hero Slider
const images = [
    "assets/images/hero1.jpg",
    "assets/images/hero2.jpg",
    "assets/images/hero3.jpg"
];

let current = 0;
const hero = document.querySelector('.hero-section');

function showSlide(index) {
    if(index < 0) index = images.length - 1;
    if(index >= images.length) index = 0;
    hero.style.backgroundImage = `url(${images[index]})`;
    current = index;
}

document.getElementById('prev').addEventListener('click', () => showSlide(current - 1));
document.getElementById('next').addEventListener('click', () => showSlide(current + 1));

// Initialize first slide
showSlide(0);

