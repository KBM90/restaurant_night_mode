// ===================================
// L'ARTISTE - JavaScript Functionality
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ===================================
    // Language System
    // ===================================
    const translations = {
        en: {
            'sidebar-phone': 'Phone :',
            'sidebar-address': 'Address :',
            'sidebar-email': 'Email :',
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-menu': 'Menu',
            'nav-chefs': 'Our Chefs',
            'nav-gallery': 'Gallery',
            'nav-contact': 'Contact',
            'hero-btn': 'Discover Work',
            'art-label': 'CUISINES',
            'art-text': 'Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article). We develop creative solutions for small and big brands alike, build authentic product identities and much more.',
            'art-btn': 'PRESENTATION',
            'chef-label': "OUR CHEF'S CUISINE",
            'chef-subtitle': 'a vision for cuisine.',
            'video-label': 'Example in pictures .',
            'slogan-label': 'OUR SLOGAN :',
            'footer-text': 'All rights reserved © 2020, Example .'
        },
        fr: {
            'sidebar-phone': 'Téléphone :',
            'sidebar-address': 'Adresse :',
            'sidebar-email': 'Email :',
            'nav-home': 'Accueil',
            'nav-about': 'À Propos',
            'nav-menu': 'Menu',
            'nav-chefs': 'Nos Chefs',
            'nav-gallery': 'Galerie',
            'nav-contact': 'Contact',
            'hero-btn': 'Découvrir',
            'art-label': 'CUISINES',
            'art-text': "Le branding n'est plus simplement une question d'attrait visuel (ou la cerise sur le gâteau comme dans mon article précédent). Nous développons des solutions créatives pour les petites et grandes marques, construisons des identités de produits authentiques et bien plus encore.",
            'art-btn': 'PRÉSENTATION',
            'chef-label': 'NOS CHEFS CUISINE',
            'chef-subtitle': 'une vision pour la cuisine.',
            'video-label': 'Example en image .',
            'slogan-label': 'NOTRE SLOGAN :',
            'footer-text': 'Tous droits réservés © 2020, Example .'
        },
        ar: {
            'sidebar-phone': 'الهاتف :',
            'sidebar-address': 'العنوان :',
            'sidebar-email': 'البريد الإلكتروني :',
            'nav-home': 'الرئيسية',
            'nav-about': 'عن المطعم',
            'nav-menu': 'القائمة',
            'nav-chefs': 'طهاتنا',
            'nav-gallery': 'المعرض',
            'nav-contact': 'اتصل بنا',
            'hero-btn': 'اكتشف أعمالنا',
            'art-label': 'المطبخ',
            'art-text': 'لم تعد العلامة التجارية مجرد جاذبية بصرية (أو الكرز على الكعكة كما في مقالتي السابقة). نحن نطور حلولاً إبداعية للعلامات التجارية الصغيرة والكبيرة على حد سواء، ونبني هويات منتجات أصيلة وأكثر من ذلك بكثير.',
            'art-btn': 'العرض التقديمي',
            'chef-label': 'مطبخ طهاتنا',
            'chef-subtitle': 'رؤية للطهي.',
            'video-label': 'مثال بالصور .',
            'slogan-label': 'شعارنا :',
            'footer-text': 'جميع الحقوق محفوظة © 2020، Example .'
        },
        es: {
            'sidebar-phone': 'Teléfono :',
            'sidebar-address': 'Dirección :',
            'sidebar-email': 'Correo :',
            'nav-home': 'Inicio',
            'nav-about': 'Acerca de',
            'nav-menu': 'Menú',
            'nav-chefs': 'Nuestros Chefs',
            'nav-gallery': 'Galería',
            'nav-contact': 'Contacto',
            'hero-btn': 'Descubrir',
            'art-label': 'COCINAS',
            'art-text': 'El branding ya no se trata simplemente de atractivo visual (o la cereza del pastel como en mi artículo anterior). Desarrollamos soluciones creativas para marcas pequeñas y grandes por igual, construimos identidades de productos auténticas y mucho más.',
            'art-btn': 'PRESENTACIÓN',
            'chef-label': 'COCINA DE NUESTROS CHEFS',
            'chef-subtitle': 'una visión para la cocina.',
            'video-label': 'Ejemplo en imágenes .',
            'slogan-label': 'NUESTRO ESLOGAN :',
            'footer-text': 'Todos los derechos reservados © 2020, Example .'
        },
        de: {
            'sidebar-phone': 'Telefon :',
            'sidebar-address': 'Adresse :',
            'sidebar-email': 'E-Mail :',
            'nav-home': 'Startseite',
            'nav-about': 'Über uns',
            'nav-menu': 'Menü',
            'nav-chefs': 'Unsere Köche',
            'nav-gallery': 'Galerie',
            'nav-contact': 'Kontakt',
            'hero-btn': 'Entdecken',
            'art-label': 'KÜCHEN',
            'art-text': 'Branding ist nicht mehr nur eine Frage der visuellen Attraktivität (oder die Kirsche auf dem Kuchen, wie in meinem früheren Artikel). Wir entwickeln kreative Lösungen für kleine und große Marken gleichermaßen, bauen authentische Produktidentitäten und vieles mehr.',
            'art-btn': 'PRÄSENTATION',
            'chef-label': 'KÜCHE UNSERER KÖCHE',
            'chef-subtitle': 'eine Vision für die Küche.',
            'video-label': 'Beispiel in Bildern .',
            'slogan-label': 'UNSER SLOGAN :',
            'footer-text': 'Alle Rechte vorbehalten © 2020, Example .'
        }
    };

    const languageNames = {
        en: { flag: '🇬🇧', short: 'EN' },
        fr: { flag: '🇫🇷', short: 'FR' },
        ar: { flag: '🇸🇦', short: 'AR' },
        es: { flag: '🇪🇸', short: 'ES' },
        de: { flag: '🇩🇪', short: 'DE' }
    };

    let currentLanguage = 'fr'; // Default to French for restaurant

    function initLanguage() {
        const savedLang = localStorage.getItem('restaurant-language');
        const browserLang = navigator.language.split('-')[0];

        if (savedLang && translations[savedLang]) {
            currentLanguage = savedLang;
        } else if (translations[browserLang]) {
            currentLanguage = browserLang;
        }

        setLanguage(currentLanguage);
    }

    function setLanguage(lang) {
        if (!translations[lang]) return;

        currentLanguage = lang;
        localStorage.setItem('restaurant-language', lang);

        // Update all translatable elements
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update language button
        const currentLangBtn = document.getElementById('currentLang');
        if (currentLangBtn) {
            currentLangBtn.textContent = `${languageNames[lang].flag} ${languageNames[lang].short}`;
        }

        // Update active language option
        document.querySelectorAll('.lang-option').forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            }
        });

        // Handle RTL for Arabic
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', lang);
        }
    }

    function initLanguageDropdown() {
        const languageBtn = document.getElementById('languageBtn');
        const languageMenu = document.getElementById('languageMenu');
        const langOptions = document.querySelectorAll('.lang-option');

        if (!languageBtn || !languageMenu) {
            console.warn('Language dropdown elements not found');
            return;
        }

        languageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            languageMenu.classList.toggle('active');
            void languageMenu.offsetWidth; // Force reflow for Brave
        });

        document.addEventListener('click', (e) => {
            if (!languageBtn.contains(e.target) && !languageMenu.contains(e.target)) {
                languageMenu.classList.remove('active');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && languageMenu.classList.contains('active')) {
                languageMenu.classList.remove('active');
            }
        });

        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const selectedLang = option.getAttribute('data-lang');
                if (selectedLang) {
                    setLanguage(selectedLang);
                    languageMenu.classList.remove('active');
                }
            });
        });
    }

    // Initialize language system
    initLanguage();
    initLanguageDropdown();

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
