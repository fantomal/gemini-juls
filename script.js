document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal animation (fade-up)
    const fadeElements = document.querySelectorAll('.fade-up');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Sticky product nav shadow/background change on scroll
    const productNav = document.querySelector('.product-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 44) {
            productNav.classList.add('scrolled');
        } else {
            productNav.classList.remove('scrolled');
        }
    });

    // Interactive 3D tilt effect on the mock device (hero image)
    const mockDevice = document.querySelector('.mock-device');
    const heroSection = document.querySelector('.hero');
    const glow = document.querySelector('.glow');

    if (mockDevice && heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 30;

            mockDevice.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis + 10}deg)`; // +10deg for base tilt

            if (glow) {
                const rect = mockDevice.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(41, 151, 255, 0.2) 0%, transparent 60%)`;
            }
        });

        heroSection.addEventListener('mouseleave', () => {
            mockDevice.style.transform = `rotateY(0deg) rotateX(10deg)`;
        });
    }
});