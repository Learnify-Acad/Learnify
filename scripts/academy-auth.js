/**
 * Learnify Academy — access gate
 * Predefined password for parents/staff (share privately).
 */
const ACADEMY_AUTH = {
    PASSWORD: 'Learnify2026',
    STORAGE_KEY: 'learnify-academy-auth',

    isAuthenticated() {
        return sessionStorage.getItem(this.STORAGE_KEY) === 'granted';
    },

    grantAccess() {
        sessionStorage.setItem(this.STORAGE_KEY, 'granted');
    },

    revokeAccess() {
        sessionStorage.removeItem(this.STORAGE_KEY);
    },

    requireAuth() {
        if (new URLSearchParams(window.location.search).has('export')) return;
        const path = window.location.pathname;
        const isLoginPage = path.endsWith('/academy/index.html') ||
            path.endsWith('/academy/') ||
            path.endsWith('\\academy\\index.html');
        if (isLoginPage) return;
        if (!this.isAuthenticated()) {
            const base = path.includes('/academy/') || path.includes('\\academy\\')
                ? 'index.html'
                : 'academy/index.html';
            window.location.replace(base);
        }
    },

    initLoginForm() {
        const form = document.getElementById('academy-login-form');
        if (!form) return;
        if (this.isAuthenticated()) {
            window.location.replace('portal.html');
            return;
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('academy-password');
            const error = document.getElementById('login-error');
            if (input && input.value === this.PASSWORD) {
                this.grantAccess();
                window.location.replace('portal.html');
            } else if (error) {
                error.hidden = false;
                input?.classList.add('input-error');
            }
        });
    }
};
