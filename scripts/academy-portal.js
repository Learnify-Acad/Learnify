/**
 * Learnify Academy portal — i18n, auth, helpers
 */
const WHATSAPP_NUMBER = '201038583382';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const academyPortal = {
    lang: localStorage.getItem('academy-lang') || 'ar',

    init() {
        ACADEMY_AUTH.requireAuth();
        this.setupLanguage();
        this.setupLogout();
        this.setupMobileMenu();
        this.applyTranslations(this.lang);
        document.title = getAcademyTranslation(this.lang, 'meta.portalTitle');
    },

    initLogin() {
        ACADEMY_AUTH.initLoginForm();
        this.setupLanguage();
        this.applyTranslations(this.lang);
        document.title = getAcademyTranslation(this.lang, 'meta.loginTitle');
    },

    setupLanguage() {
        document.querySelectorAll('.lang-switcher [data-lang]').forEach(btn => {
            btn.addEventListener('click', () => {
                this.lang = btn.getAttribute('data-lang');
                localStorage.setItem('academy-lang', this.lang);
                this.applyTranslations(this.lang);
            });
        });
    },

    setupLogout() {
        const btn = document.getElementById('academy-logout');
        if (btn) {
            btn.addEventListener('click', () => {
                ACADEMY_AUTH.revokeAccess();
                window.location.href = 'index.html';
            });
        }
    },

    setupMobileMenu() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const nav = document.getElementById('nav-menu');
        if (menuBtn && nav) {
            menuBtn.addEventListener('click', () => nav.classList.toggle('active'));
        }
    },

    applyTranslations(lang) {
        const dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', dir);

        document.querySelectorAll('.lang-switcher [data-lang]').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        document.querySelectorAll('[data-i18n-a]').forEach(el => {
            const key = el.getAttribute('data-i18n-a');
            const val = getAcademyTranslation(lang, key);
            if (val) {
                if (el.tagName === 'INPUT') {
                    el.placeholder = val;
                } else {
                    el.textContent = val;
                }
            }
        });

        const phoneEl = document.getElementById('contact-phone');
        if (phoneEl) {
            phoneEl.textContent = getAcademyTranslation(lang, 'contact.phone');
            phoneEl.href = WHATSAPP_LINK;
        }
        const waBtn = document.getElementById('whatsapp-cta');
        if (waBtn) waBtn.href = WHATSAPP_LINK;
        const loginContact = document.getElementById('login-contact');
        if (loginContact) {
            loginContact.textContent = getAcademyTranslation(lang, 'login.contact');
            loginContact.href = WHATSAPP_LINK;
        }
    },

    downloadFile(filename) {
        const link = document.createElement('a');
        link.href = `../downloads/${filename}`;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

const academyApp = {
    downloadFile(filename) {
        academyPortal.downloadFile(filename);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('academy-login-form')) {
        academyPortal.initLogin();
    } else if (document.getElementById('academy-portal')) {
        academyPortal.init();
    }
});
