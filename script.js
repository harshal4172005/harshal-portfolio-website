// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animated counters for stats
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target') || counter.textContent);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    if (counter.textContent.includes('.')) {
                        counter.textContent = current.toFixed(2);
                    } else {
                        counter.textContent = Math.ceil(current) + '+';
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    if (counter.textContent.includes('.')) {
                        counter.textContent = target.toFixed(2);
                    } else {
                        counter.textContent = target + '+';
                    }
                }
            };
            
            updateCounter();
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Trigger counter animation for stats section
                if (entry.target.closest('.about-stats')) {
                    animateCounters();
                }
                
                // Animate skill bars
                if (entry.target.classList.contains('skill-progress')) {
                    const width = entry.target.style.width;
                    entry.target.style.width = '0%';
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 100);
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .plan-card, .skill-category, .about-stats, .skill-progress');
    animateElements.forEach(el => observer.observe(el));

    // Typing effect for hero title
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Initialize typing effect
    setTimeout(() => {
        const nameElement = document.querySelector('.name');
        if (nameElement) {
            typeWriter(nameElement, 'Harshal Parekh', 100);
        }
    }, 1000);

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create mailto link
            const mailtoLink = `mailto:harshalparekh17@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            )}`;
            
            // Open default email client
            window.location.href = mailtoLink;
            
            // Show success message
            showNotification('Message prepared! Your email client should open shortly.', 'success');
            
            // Reset form
            this.reset();
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 5000);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        });
    }

    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.geometric-shapes .shape');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
        });
    });

    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Plan card interactions
    const planCards = document.querySelectorAll('.plan-card');
    planCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Skill bar animation on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.style.width;
                skillBar.style.width = '0%';
                
                setTimeout(() => {
                    skillBar.style.transition = 'width 1.5s ease-in-out';
                    skillBar.style.width = width;
                }, 200);
                
                skillObserver.unobserve(skillBar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillObserver.observe(bar));

    // Floating animation for hero cards
    function animateFloatingCards() {
        const cards = document.querySelectorAll('.floating-card');
        cards.forEach((card, index) => {
            const delay = index * 500;
            const duration = 3000 + (index * 500);
            
            setInterval(() => {
                card.style.transform = `translateY(-10px) rotate(${Math.random() * 10 - 5}deg)`;
                setTimeout(() => {
                    card.style.transform = `translateY(0) rotate(0deg)`;
                }, duration / 2);
            }, duration);
        });
    }

    // Initialize floating animations
    animateFloatingCards();

    // Theme switching (for future enhancement)
    function initThemeSwitch() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', function() {
                document.body.classList.toggle('dark-theme');
                localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
            });
        }
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }

    // Initialize theme switching
    initThemeSwitch();

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate hero content
        const heroElements = document.querySelectorAll('.hero-text > *');
        heroElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    });

    // Add scroll progress indicator
    function createScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            const progressBarFill = document.querySelector('.scroll-progress-bar');
            if (progressBarFill) {
                progressBarFill.style.width = scrollPercent + '%';
            }
        });
    }

    // Initialize scroll progress
    createScrollProgress();

    // Add custom cursor for desktop
    function initCustomCursor() {
        if (window.innerWidth > 768) {
            const cursor = document.createElement('div');
            cursor.className = 'custom-cursor';
            document.body.appendChild(cursor);
            
            document.addEventListener('mousemove', function(e) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });
            
            // Add hover effects for interactive elements
            const interactiveElements = document.querySelectorAll('a, button, .project-card, .plan-card');
            interactiveElements.forEach(element => {
                element.addEventListener('mouseenter', () => cursor.classList.add('hover'));
                element.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
            });
        }
    }

    // Initialize custom cursor
    initCustomCursor();

    // Initialize BUILD section features
    initBuildSection();
});

// BUILD Section functionality
function initBuildSection() {
    // Countdown timer
    function updateCountdown() {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 30); // 30 days from now
        
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    }
    
    // Update countdown every minute
    updateCountdown();
    setInterval(updateCountdown, 60000);
    
    // Notification form
    const notifyBtn = document.querySelector('.notify-btn');
    const notifyInput = document.querySelector('.notify-input');
    
    if (notifyBtn && notifyInput) {
        notifyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const email = notifyInput.value.trim();
            
            if (!email) {
                showNotification('Please enter your email address', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate successful subscription
            showNotification('🎉 Successfully subscribed! You\'ll be notified when we launch.', 'success');
            notifyInput.value = '';
            
            // Update counter
            const noteElement = document.querySelector('.notify-note');
            if (noteElement) {
                const currentCount = 500;
                const newCount = currentCount + 1;
                noteElement.textContent = `Join ${newCount}+ developers waiting for these automation solutions`;
            }
        });
        
        // Enter key support
        notifyInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                notifyBtn.click();
            }
        });
    }
    
    // Animate preview cards on scroll
    const previewCards = document.querySelectorAll('.preview-card');
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });
    
    previewCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        cardObserver.observe(card);
    });
    
    // Animate teaser items
    const teaserItems = document.querySelectorAll('.teaser-item');
    teaserItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Pulse animation for coming soon icon
    const comingSoonIcon = document.querySelector('.coming-soon-icon');
    if (comingSoonIcon) {
        setInterval(() => {
            comingSoonIcon.style.transform = 'scale(1.1)';
            setTimeout(() => {
                comingSoonIcon.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
});

// Add CSS for notifications and additional features
const additionalCSS = `
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    max-width: 350px;
}

.notification.notification-success {
    border-left: 4px solid #10b981;
}

.notification.notification-error {
    border-left: 4px solid #ef4444;
}

.notification.notification-info {
    border-left: 4px solid #3b82f6;
}

.notification-content {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.notification-message {
    flex: 1;
    margin-right: 1rem;
}

.notification-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;
}

.notification-close:hover {
    color: #333;
}

.scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: rgba(0, 0, 0, 0.1);
    z-index: 9999;
}

.scroll-progress-bar {
    height: 100%;
    background: linear-gradient(45deg, #667eea, #764ba2);
    width: 0%;
    transition: width 0.1s ease;
}

.custom-cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    background: #6366f1;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: all 0.1s ease;
    mix-blend-mode: difference;
}

.custom-cursor.hover {
    width: 40px;
    height: 40px;
    background: rgba(99, 102, 241, 0.3);
}

body.loaded {
    overflow-x: hidden;
}

/* Animation classes */
.animate {
    animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Dark theme styles (for future enhancement) */
.dark-theme {
    --bg-color: #1a1a1a;
    --text-color: #fff;
    --card-bg: #2d2d2d;
}

.dark-theme body {
    background: var(--bg-color);
    color: var(--text-color);
}

.dark-theme .navbar {
    background: rgba(26, 26, 26, 0.95);
}

.dark-theme .project-card,
.dark-theme .plan-card,
.dark-theme .skill-category {
    background: var(--card-bg);
}

/* Loading animation */
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.loading {
    animation: pulse 1.5s ease-in-out infinite;
}

/* Additional hover effects */
.hero-social .social-link:hover {
    transform: translateY(-2px) scale(1.1);
}

.floating-card {
    transition: all 0.3s ease;
}

.floating-card:hover {
    transform: scale(1.1) !important;
    z-index: 10;
}

/* Responsive enhancements */
@media (max-width: 768px) {
    .custom-cursor {
        display: none;
    }
    
    .notification {
        right: 10px;
        left: 10px;
        max-width: none;
        transform: translateY(-100px);
    }
}
`;

// Add the additional CSS to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);