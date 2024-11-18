function cambiarSlide() {
    const slides = document.querySelectorAll('.carrusel-slide');
    let activeSlide = document.querySelector('.carrusel-slide.active');
    activeSlide.classList.remove('active');
    
    if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add('active');
    } else {
        slides[0].classList.add('active');
    }
}

function checkScroll() {
    const noticias = document.querySelectorAll('.noticia');
    noticias.forEach(noticia => {
        const noticiaTop = noticia.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (noticiaTop < windowHeight * 0.75) {
            noticia.classList.add('visible');
        }
    });
}

function initializeMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        menuToggle.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnMenuToggle = menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnMenuToggle && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            menuToggle.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initializeMenu();
    setInterval(cambiarSlide, 5000);
    window.addEventListener('scroll', checkScroll);
    checkScroll();
});