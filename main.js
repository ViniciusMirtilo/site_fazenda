// Slider functionality
const images = [
    '../img/slide01.jpg',
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

          // Se o ponto já estiver ativo, ignore o clique
          if (dot.classList.contains('active')) {
            return;
        }

        // Ativa o ponto e bloqueia a alteração por 10 segundos
        dot.classList.add('active');

        // Bloqueia a interação com o ponto por 10 segundos
        dot.style.pointerEvents = 'none';  // Desativa a interação com o ponto

        setTimeout(() => {
            // Após 10 segundos, desbloqueia o ponto
            dot.style.pointerEvents = 'auto';  // Habilita novamente a interação
        }, 10000);  // 10 segundos
    });
});

// Form handling
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    form.reset();
});

// Smooth scroll for navigation links
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