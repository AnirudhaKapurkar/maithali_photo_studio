// Photo Slider
// Remove or comment out the photo slider initialization
const initPhotoSlider = () => {
    const slider = document.querySelector('.gallery-grid');
    if (!slider) return;
    // Removing animation logic
};

// Contact Form Validation
const initContactForm = () => {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        const fields = form.querySelectorAll('input, textarea');

        fields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('error');
                isValid = false;
            } else {
                field.classList.remove('error');
            }
        });

        if (isValid) {
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Message sent successfully!';
            form.appendChild(successMessage);
            form.reset();
            setTimeout(() => successMessage.remove(), 3000);
        }
    });
};

// Dark Mode Toggle
const initDarkMode = () => {
    const toggle = document.createElement('button');
    toggle.className = 'dark-mode-toggle';
    toggle.innerHTML = '🌙';
    document.body.appendChild(toggle);

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggle.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
};

// Smooth Scrolling
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
};

// Scroll Animations
const initScrollAnimations = () => {
    const elements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
};

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    initPhotoSlider();
    initContactForm();
    initDarkMode();
    initSmoothScroll();
    initScrollAnimations();
    document.body.classList.add('loaded');
});

// Login popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginPopup = document.getElementById('loginPopup');
    const loginForm = document.getElementById('loginForm');
    const closeBtn = document.getElementById('closeLogin');
    const contactForm = document.querySelector('.contact-form');

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            loginPopup.classList.add('hidden');
            if (contactForm) {
                contactForm.style.display = 'block';
            }
        });
    }

    if (loginPopup && loginForm) {
        // Hide contact form initially
        if (contactForm) {
            contactForm.style.display = 'none';
        }

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === "admin" && password === "password") {
                loginPopup.classList.add('hidden');
                // Show contact form after successful login
                if (contactForm) {
                    contactForm.style.display = 'block';
                }
                localStorage.setItem('isLoggedIn', 'true');
            } else {
                alert('Invalid credentials');
            }
        });

        // Check if user is already logged in
        if (localStorage.getItem('isLoggedIn')) {
            loginPopup.classList.add('hidden');
            if (contactForm) {
                contactForm.style.display = 'block';
            }
        }
    }
});