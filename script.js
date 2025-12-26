// ===================================
// L'ARTISTE - JavaScript Functionality
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ===================================
    // Sidebar Menu Toggle
    // ===================================
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');

    menuBtn.addEventListener('click', function () {
        sidebar.classList.add('active');
    });

    sidebarClose.addEventListener('click', function () {
        sidebar.classList.remove('active');
    });

    // Close sidebar when clicking on a link
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function () {
            sidebar.classList.remove('active');
        });
    });

    // Close sidebar when clicking outside
    sidebar.addEventListener('click', function (e) {
        if (e.target === sidebar) {
            sidebar.classList.remove('active');
        }
    });

    // ===================================
    // Hero Slider
    // ===================================
    const slides = document.querySelectorAll('.slide');
    const sliderDots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            // Add 'prev' class to slides that come before the current one
            if (i < index) {
                slide.classList.add('prev');
            } else {
                slide.classList.remove('prev');
            }
        });
        sliderDots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current slide and dot
        slides[index].classList.add('active');
        sliderDots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Auto-play slider
    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    // Navigation buttons
    nextBtn.addEventListener('click', function () {
        stopSlider();
        nextSlide();
        startSlider();
    });

    prevBtn.addEventListener('click', function () {
        stopSlider();
        prevSlide();
        startSlider();
    });

    // Dot navigation
    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            stopSlider();
            currentSlide = index;
            showSlide(currentSlide);
            startSlider();
        });
    });

    // Start the slider
    startSlider();

    // Pause slider on hover
    const heroSlider = document.querySelector('.hero-slider');
    heroSlider.addEventListener('mouseenter', stopSlider);
    heroSlider.addEventListener('mouseleave', startSlider);

    // ===================================
    // Scroll Reveal Animation
    // ===================================
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // ===================================
    // Video Popup
    // ===================================
    const videoTrigger = document.getElementById('videoTrigger');
    const videoPopup = document.getElementById('videoPopup');
    const videoClose = document.getElementById('videoClose');
    const videoFrame = document.getElementById('videoFrame');

    // Replace with actual video URL
    const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

    videoTrigger.addEventListener('click', function () {
        videoPopup.classList.add('active');
        videoFrame.src = videoUrl;
    });

    videoClose.addEventListener('click', function () {
        videoPopup.classList.remove('active');
        videoFrame.src = '';
    });

    // Close popup when clicking outside
    videoPopup.addEventListener('click', function (e) {
        if (e.target === videoPopup) {
            videoPopup.classList.remove('active');
            videoFrame.src = '';
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && videoPopup.classList.contains('active')) {
            videoPopup.classList.remove('active');
            videoFrame.src = '';
        }
    });

    // ===================================
    // Testimonials Slider
    // ===================================
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    // Auto-rotate testimonials
    setInterval(nextTestimonial, 4000);

    // ===================================
    // Scroll to Top Button
    // ===================================
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===================================
    // Smooth Scrolling for Anchor Links
    // ===================================
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

    // ===================================
    // Header Background on Scroll
    // ===================================
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
            header.style.background = 'rgba(9, 9, 9, 0.95)';
        } else {
            header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)';
        }
    });

    // ===================================
    // Parallax Effect (Optional)
    // ===================================
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.slide-bg');

        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // ===================================
    // Preloader (Optional)
    // ===================================
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');
    });

});
