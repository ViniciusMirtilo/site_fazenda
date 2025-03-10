const images = [
    '../img/slide01.jpg',
    '../img/slide02.jpg',
    '../img/slide03.jpg',
    '../img/slide04.jpg'
];

let currentSlide = 0;
const sliderImage = document.getElementById('sliderImage'); // Pegando a única imagem
const dots = document.querySelectorAll('.dot');

function updateSlider() {
    sliderImage.src = images[currentSlide]; // Apenas troca o src
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Mudar o slide automaticamente a cada 5 segundos
setInterval(() => {
    currentSlide = (currentSlide + 1) % images.length;
    updateSlider();
}, 5000);

// Evento de clique nos dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
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
