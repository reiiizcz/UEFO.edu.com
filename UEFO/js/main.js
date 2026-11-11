document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const logo = document.querySelector('.brand-mark img');

    if (logo) {
        logo.addEventListener('load', () => {
            logo.hidden = false;
        }, { once: true });
        logo.addEventListener('error', () => {
            logo.hidden = true;
        }, { once: true });
        if (logo.complete && logo.naturalWidth > 0) {
            logo.hidden = false;
        }
    }

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
            navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
        });

        navLinks.addEventListener('click', (event) => {
            if (event.target.closest('a')) {
                navLinks.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.setAttribute('aria-label', 'Abrir menú');
                if (dropdown) {
                    dropdown.classList.remove('is-open');
                }
                if (dropdownToggle) {
                    dropdownToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }

    if (dropdown && dropdownToggle) {
        dropdownToggle.addEventListener('click', () => {
            const isOpen = dropdown.classList.toggle('is-open');
            dropdownToggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') {
                e.preventDefault();
                return;
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const form = document.querySelector('.form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por comunicarte! El mensaje ha sido enviado al departamento correspondiente.');
            form.reset();
        });
    }
});