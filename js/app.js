// Modal Functions
function openModal() {
    document.getElementById('modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Form Handler
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const inputs = form.querySelectorAll('input, select');
    const values = {};
    inputs.forEach(input => {
        values[input.placeholder || input.name] = input.value;
    });
    
    console.log('Form submitted:', values);
    
    // Show success message
    alert('Дякуємо за заявку! Ми зв\'яжемося з вами найближчим часом.');
    
    // Reset form and close modal
    form.reset();
    closeModal();
}

// Active navigation link
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPage || (currentPage === '/' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Add animation to cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards
    const cards = document.querySelectorAll('.feature-card, .course-card, .testimonial-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate stats counter
    const animateCounter = (element, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start).toLocaleString();
            }
        }, 16);
    };
    
    // Animate stats when visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    const number = parseInt(text.replace(/\D/g, ''));
                    const suffix = text.replace(/[0-9]/g, '') || '+';
                    
                    if (number && !stat.classList.contains('animated')) {
                        stat.classList.add('animated');
                        animateCounter(stat, number);
                        setTimeout(() => {
                            stat.textContent = number.toLocaleString() + suffix;
                        }, 2000);
                    }
                });
            }
        });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Console welcome message
console.log('%c🚀 Ласкаво просимо до Школи!', 'color: #4F46E5; font-size: 24px; font-weight: bold;');
console.log('%cГотові розпочати свій шлях у програмуванні?', 'color: #6b7280; font-size: 14px;');
console.log('%cGitHub: https://github.com/Vickordon/online-school', 'color: #10b981; font-size: 12px;');