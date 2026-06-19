// Main JavaScript for Al Horya School Technology Competition Website
// Handles language switching, dynamic content, forms, and interactions

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function () {
    initializeLanguage();
    setupLanguageSwitcher();
    setupNavigation();
    setupFAQ();
    setupForms();
    setupScrollAnimations();
});

// ========= LANGUAGE MANAGEMENT =========

function initializeLanguage() {
    // Get saved language or default to Arabic
    const savedLang = localStorage.getItem('competition-lang') || 'ar';
    setLanguage(savedLang);
}

function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('[data-lang]');

    langButtons.forEach(button => {
        button.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            localStorage.setItem('competition-lang', lang);
        });
    });
}

function setLanguage(lang) {
    // Update HTML dir and lang attributes
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    // Update active button state
    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update all translated elements
    updateContent(lang);
}

function updateContent(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = getNestedProperty(t, key);

        if (value) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = value;
            } else {
                element.textContent = value;
            }
        }
    });

    // Update lists with data-i18n-list
    document.querySelectorAll('[data-i18n-list]').forEach(list => {
        const key = list.getAttribute('data-i18n-list');
        const items = getNestedProperty(t, key);

        if (Array.isArray(items)) {
            list.innerHTML = items.map(item =>
                `<li><svg class="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>${item}</li>`
            ).join('');
        }
    });

    // Update FAQ items
    updateFAQ(lang);
}

function getNestedProperty(obj, path) {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
}

// ========= NAVIGATION =========

function setupNavigation() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Close mobile menu if open
                    navMenu?.classList.remove('active');
                    mobileMenuBtn?.classList.remove('active');
                }
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ========= FAQ ACCORDION =========

function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question?.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all FAQ items
            faqItems.forEach(faq => faq.classList.remove('active'));

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

function updateFAQ(lang) {
    const t = translations[lang];
    const faqContainer = document.getElementById('faq-list');

    if (faqContainer && t.faq.questions) {
        faqContainer.innerHTML = t.faq.questions.map((item, index) => `
      <div class="faq-item">
        <button class="faq-question">
          <span>${item.q}</span>
          <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="faq-answer">
          <p>${item.a}</p>
        </div>
      </div>
    `).join('');

        // Re-setup FAQ after updating HTML
        setupFAQ();
    }
}

// ========= FORM HANDLING =========

function setupForms() {
    const submissionForm = document.getElementById('submission-form');
    const fileInput = document.getElementById('project-file');
    const fileInfo = document.getElementById('file-info');

    // File upload handling
    if (fileInput && fileInfo) {
        fileInput.addEventListener('change', function () {
            if (this.files && this.files[0]) {
                const file = this.files[0];
                const fileSize = (file.size / 1024 / 1024).toFixed(2); // MB
                const lang = document.documentElement.getAttribute('lang');

                fileInfo.innerHTML = `
          <div class="file-preview">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M11.6667 1.66667H5C4.55797 1.66667 4.13405 1.84226 3.82149 2.15482C3.50893 2.46738 3.33333 2.89131 3.33333 3.33334V16.6667C3.33333 17.1087 3.50893 17.5326 3.82149 17.8452C4.13405 18.1577 4.55797 18.3333 5 18.3333H15C15.442 18.3333 15.866 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667V6.66667L11.6667 1.66667Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.6667 1.66667V6.66667H16.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>${file.name}</span>
            <span class="file-size">${fileSize} MB</span>
          </div>
        `;

                // Validate file size (max 50MB)
                if (file.size > 50 * 1024 * 1024) {
                    showNotification(
                        lang === 'ar' ? 'الملف كبير جداً (الحد الأقصى 50 ميجا)' : 'File too large (max 50MB)',
                        'error'
                    );
                    fileInput.value = '';
                    fileInfo.innerHTML = '';
                }
            }
        });
    }

    // Form submission
    if (submissionForm) {
        submissionForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const lang = document.documentElement.getAttribute('lang');
            const formData = new FormData(this);

            // Validate required fields
            const requiredFields = ['student-name', 'grade', 'category', 'project-description'];
            let isValid = true;

            requiredFields.forEach(field => {
                const input = this.querySelector(`[name="${field}"]`);
                if (!input || !input.value.trim()) {
                    isValid = false;
                    input?.classList.add('error');
                } else {
                    input?.classList.remove('error');
                }
            });

            if (!fileInput?.files?.[0]) {
                isValid = false;
                fileInput?.classList.add('error');
            }

            if (!isValid) {
                showNotification(
                    lang === 'ar' ? 'الرجاء ملء جميع الحقول المطلوبة' : 'Please fill all required fields',
                    'error'
                );
                return;
            }

            // Simulate submission (replace with actual backend call)
            showNotification(
                lang === 'ar' ? 'جاري إرسال المشروع...' : 'Submitting project...',
                'info'
            );

            setTimeout(() => {
                showNotification(
                    lang === 'ar' ? 'تم تقديم المشروع بنجاح!' : 'Project submitted successfully!',
                    'success'
                );
                submissionForm.reset();
                fileInfo.innerHTML = '';
            }, 2000);
        });
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add to page
    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 10);

    // Remove after 4 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ========= SCROLL ANIMATIONS =========

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ========= MODAL HANDLERS =========

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on outside click
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});

// Close modal on escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            closeModal(modal.id);
        });
    }
});

// ========= UTILITY FUNCTIONS =========

function formatDate(dateString, lang) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', options);
}

function downloadFile(filename) {
    const link = document.createElement('a');
    link.href = `downloads/${filename}`;
    link.download = filename;
    link.click();
}

// Export functions for global use
window.competitionApp = {
    setLanguage,
    openModal,
    closeModal,
    downloadFile,
    showNotification
};
