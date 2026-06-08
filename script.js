document.addEventListener('DOMContentLoaded', () => {
    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.section, .card, .case-card, .feature-pillar, .value-item');
    
    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                // obs.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll for nav links (already covered by CSS scroll-behavior, but good as fallback)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ── Hero Carousel ──
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Auto-advance every 3.5 seconds
setInterval(() => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
}, 3500);

// ── Contact Modal ──
function openModal() {
    const modal = document.getElementById('contactModal');
    const form = document.getElementById('modalForm');
    const success = document.getElementById('modalSuccess');
    document.getElementById('contactForm').reset();
    form.style.display = 'block';
    success.style.display = 'none';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('contactModal').classList.remove('open');
    document.body.style.overflow = '';
}

function handleOverlayClick(e) {
    if (e.target === document.getElementById('contactModal')) {
        closeModal();
    }
}

function submitForm(e) {
    e.preventDefault();
    document.getElementById('modalForm').style.display = 'none';
    document.getElementById('modalSuccess').style.display = 'block';
}

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
