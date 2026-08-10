// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('is-open');
        navToggle.classList.toggle('is-active');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('is-open');
            navToggle.classList.remove('is-active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background opacity on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.8)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    }
    
    lastScroll = currentScroll;
});

// Mark document as JS-loaded so animations only apply when JS is available
document.documentElement.classList.add('js-loaded');

// Check if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Intersection Observer for fade-in animations on service cards
if (!prefersReducedMotion) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Subtle parallax effect on hero section (respects reduced motion preference)
if (!prefersReducedMotion) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.8;
        }
    });
}

// Add subtle glitch effect to hero text on load
window.addEventListener('load', () => {
    const glitchText = document.querySelector('.glitch-text');
    if (glitchText) {
        setTimeout(() => {
            glitchText.style.animation = 'none';
        }, 2000);
    }
});

// Email link copy functionality (optional enhancement)
const emailLink = document.querySelector('.email-link');
if (emailLink) {
    emailLink.addEventListener('click', (e) => {
        // Allow normal mailto: behavior, but add a subtle visual feedback
        emailLink.style.transform = 'scale(0.98)';
        setTimeout(() => {
            emailLink.style.transform = 'scale(1)';
        }, 100);
    });
}

// Show more / show less toggle for project experience groups
document.querySelectorAll('.show-more-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetGroup = button.getAttribute('data-target');
        const group = document.querySelector(`.project-group[data-group="${targetGroup}"]`);
        if (group) {
            const isExpanded = group.classList.toggle('is-expanded');
            button.textContent = isExpanded ? 'Show less' : 'Show more';
        }
    });
});
