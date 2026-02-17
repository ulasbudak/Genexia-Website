// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Mobile dropdown toggle
document.querySelectorAll('.dropdown > .nav-link').forEach(dropdownLink => {
    dropdownLink.addEventListener('click', function(e) {
        // Only prevent default on mobile
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            
            const dropdown = this.parentElement;
            const isActive = dropdown.classList.contains('dropdown-active');
            
            // Close all other dropdowns
            document.querySelectorAll('.dropdown').forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove('dropdown-active');
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('dropdown-active', !isActive);
        }
    });
});

// Close mobile menu when clicking on a non-dropdown link
document.querySelectorAll('.nav-link').forEach(n => {
    n.addEventListener('click', function() {
        // Only close menu if it's not a dropdown link
        if (!this.closest('.dropdown') || window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Close dropdown when clicking on dropdown menu links
document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.querySelectorAll('.dropdown').forEach(d => {
            d.classList.remove('dropdown-active');
        });
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(d => {
                d.classList.remove('dropdown-active');
            });
        }
    }
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Simple smooth scrolling function
function smoothScrollTo(targetId) {
    console.log('smoothScrollTo called with:', targetId);
    const target = document.getElementById(targetId);
    console.log('Target element:', target);
    
    if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        console.log('Scrolling to position:', targetPosition);
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    } else {
        console.log('Target not found for ID:', targetId);
    }
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
    console.log('Initializing smooth scrolling...');
    // Add click event listeners to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    console.log('Found links:', links.length);
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const targetId = href.substring(1); // Remove the # symbol
            console.log('Link clicked:', href, 'Target ID:', targetId);
            smoothScrollTo(targetId);
        });
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeSmoothScrolling();
    
    const animatedElements = document.querySelectorAll('.product-card, .service-card, .news-card, .stat-item, .feature');
    animatedElements.forEach(el => observer.observe(el));
});

// Also initialize on window load
window.addEventListener('load', () => {
    initializeSmoothScrolling();
});

<<<<<<< HEAD
// Form submission (Formspree)
const contactForm = document.querySelector('.contact-form form');
=======
// Form submission with email sending
const contactForm = document.getElementById('contactForm');
>>>>>>> 3b4f149 (İletişim formu Formspree ile direkt mail gönderimi eklendi)
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
<<<<<<< HEAD
=======
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Create email content
        const emailSubject = 'Genexia İletişim Formu - Yeni Mesaj';
        const emailBody = `
Yeni İletişim Formu Mesajı

Ad: ${formObject.firstName}
Soyad: ${formObject.lastName}
E-posta: ${formObject.email}
Telefon: ${formObject.phone || 'Belirtilmemiş'}
Kurum/Kuruluş: ${formObject.company || 'Belirtilmemiş'}

Mesaj:
${formObject.message}

---
Bu mesaj Genexia web sitesi iletişim formundan gönderilmiştir.
        `.trim();
        
        // Create mailto link
        const mailtoLink = `mailto:info@genexialab.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        
        // Update button
>>>>>>> 3b4f149 (İletişim formu Formspree ile direkt mail gönderimi eklendi)
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Gönderiliyor...';
        submitButton.disabled = true;
        
<<<<<<< HEAD
        try {
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
                this.reset();
            } else {
                const data = await response.json();
                alert(data.error || 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin veya info@genexialab.com adresine e-posta gönderin.');
            }
        } catch (error) {
            alert('Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin veya info@genexialab.com adresine e-posta gönderin.');
        }
        
        submitButton.textContent = originalText;
        submitButton.disabled = false;
=======
        // Create copyable message
        const messageText = `
Yeni İletişim Formu Mesajı

Ad: ${formObject.firstName}
Soyad: ${formObject.lastName}
E-posta: ${formObject.email}
Telefon: ${formObject.phone || 'Belirtilmemiş'}
Kurum/Kuruluş: ${formObject.company || 'Belirtilmemiş'}

Mesaj:
${formObject.message}

---
Bu mesaj Genexia web sitesi iletişim formundan gönderilmiştir.
        `.trim();
        
        // Show success message with copy option
        const successMessage = `
Mesajınız başarıyla hazırlandı!

Mail adresi: info@genexialab.com
Konu: Genexia İletişim Formu - Yeni Mesaj

Mesaj içeriği kopyalandı. Mail uygulamanızda yapıştırabilirsiniz.
        `;
        
        // Submit form to Formspree
        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            } else {
                throw new Error('Gönderim başarısız');
            }
        })
        .catch(error => {
            alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
>>>>>>> 3b4f149 (İletişim formu Formspree ile direkt mail gönderimi eklendi)
    });
}

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '');
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const text = statNumber.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            
            if (number && !statNumber.classList.contains('animated')) {
                statNumber.classList.add('animated');
                animateCounter(statNumber, number);
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => statsObserver.observe(item));
});

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    });
});

// News card hover effects
document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Dropdown menu improvements
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const menu = dropdown.querySelector('.dropdown-menu');
    
    dropdown.addEventListener('mouseenter', () => {
        menu.style.opacity = '1';
        menu.style.visibility = 'visible';
        menu.style.transform = 'translateY(0)';
    });
    
    dropdown.addEventListener('mouseleave', () => {
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
        menu.style.transform = 'translateY(-10px)';
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Back to top button functionality
function createBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #3182ce, #2b6cb0);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(backToTop);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effects
    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.transform = 'translateY(-3px)';
        backToTop.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
    });
    
    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.transform = 'translateY(0)';
        backToTop.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    });
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', createBackToTopButton);

// Preloader (optional)
function createPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="spinner"></div>
            <p>Genexia Yükleniyor...</p>
        </div>
    `;
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    const spinner = preloader.querySelector('.spinner');
    spinner.style.cssText = `
        width: 50px;
        height: 50px;
        border: 3px solid #e2e8f0;
        border-top: 3px solid #3182ce;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 20px;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(preloader);
    
    // Hide preloader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 1000);
    });
}

// Initialize preloader
createPreloader();

// Image loading handler
function handleImageLoad() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            // Hide placeholder when image loads
            const container = this.closest('.product-image, .hero-image, .about-image, .nav-logo, .footer-logo');
            if (container) {
                container.style.setProperty('--show-placeholder', 'none');
            }
        });
        
        img.addEventListener('error', function() {
            // Show placeholder when image fails to load
            const container = this.closest('.product-image, .hero-image, .about-image, .nav-logo, .footer-logo');
            if (container) {
                container.style.setProperty('--show-placeholder', 'flex');
            }
        });
    });
}

// Initialize image loading handler
document.addEventListener('DOMContentLoaded', handleImageLoad); 