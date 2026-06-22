document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            const isOpen = menuToggle.classList.toggle('open');
            navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                menuToggle.classList.remove('open');
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const currentPage = document.body.dataset.page;
    if (currentPage) {
        var activeLink = document.querySelector('.nav-links a[href="' + currentPage + '"]');
        if (!activeLink && currentPage === 'index.html') {
            activeLink = document.querySelector('.nav-links a[href="./"]');
        }
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});
