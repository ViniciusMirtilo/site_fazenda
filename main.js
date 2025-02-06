// Slider functionality
const images = [
    '.../img/slide01.jpg',
    '../img/slide02.jpg',
    '../img/slide03.jpg',
    '../img/slide04.jpg'
];

let currentSlide = 0;
const sliderImage = document.querySelector('.slider img');
const dots = document.querySelectorAll('.dot');

function updateSlider() {
    sliderImage.src = images[currentSlide];
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Change slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % images.length;
    updateSlider();
}, 5000);

// Add click events to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();

          if (dot.classList.contains('active')) {
            return;
        }

        dot.classList.add('active');

        dot.style.pointerEvents = 'none';  

        setTimeout(() => {
            dot.style.pointerEvents = 'auto';
        }, 10000);  // 10 segundos
    });
});

// Form handling
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    form.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
