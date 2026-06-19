/**
 * Learnify Academy — shared helpers
 */
const academyApp = {
    downloadFile(filename) {
        const inAcademyFolder = window.location.pathname.includes('/academy/') ||
            window.location.pathname.includes('\\academy\\');
        const base = inAcademyFolder ? '../downloads/' : 'downloads/';
        const link = document.createElement('a');
        link.href = `${base}${filename}`;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

// Mobile menu (reuse competition pattern if available)
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('nav-menu');
    if (btn && nav) {
        btn.addEventListener('click', () => nav.classList.toggle('active'));
    }
});
