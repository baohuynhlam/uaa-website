document.addEventListener('scroll', function (e) {
    "use strict";
    e.preventDefault();
    // Select header section
    const header = document.querySelector('header');
    if (window.scrollop >= 50 || document.documentElement.scrollTop >= 50) {
        // header.classList.remove('.header--fixed-top');
        header.classList.add('header--fixed-top-scrolled');
    } else {
        // header.classList.add('header--fixed-top');
        header.classList.remove('header--fixed-top-scrolled');
    }
});