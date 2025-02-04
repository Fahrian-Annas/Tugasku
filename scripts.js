document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.project-slider');
    const cards = document.querySelectorAll('.project-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    
    let currentIndex = 0;

    function updateSlider() {
        const cardWidth = cards[0].offsetWidth + 20; // 20 is the gap
        slider.scrollLeft = currentIndex * cardWidth;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, cards.length - 1);
        updateSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });
}); 
