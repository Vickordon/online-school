// Modal Functions
function openModal() {
    alert('Дякуємо за інтерес! Форма реєстрації буде відкрита найближчим часом.');
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.remove('active');
    }
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
    alert('Дякуємо за заявку! Ми зв\'яжемося з вами найближчим часом.');
    event.target.reset();
    closeModal();
}

// Active navigation link
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Console welcome message
console.log('%c🚀 Ласкаво просимо до Школи!', 'color: #4F46E5; font-size: 20px; font-weight: bold;');
console.log('%cГотові розпочати свій шлях у програмуванні?', 'color: #6b7280; font-size: 14px;');
console.log('%cGitHub: https://github.com/Vickordon/online-school', 'color: #10b981; font-size: 12px;');