var currentSlide = 0;
var totalSlides = 5;
var slideContainer = document.querySelector('.slide-container');
var dots = document.querySelectorAll('.indicator-dot');
var timer;

function showSlide(index) {
    slideContainer.style.transform = 'translateX(' + (-index * 20) + '%)';
    currentSlide = index;
    updateDots();
    resetTimer();
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
}

function redirectToBase() {
    window.location.href = 'index';
}

function goToSlide(index) {
    showSlide(index);
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 5000);
}

resetTimer(); // Запустить таймер при загрузке страницы