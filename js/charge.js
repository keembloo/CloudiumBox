const charge = document.querySelector('.charge');

function addClassOnScroll() {
    if (charge.getBoundingClientRect().top <= window.innerHeight) {
        charge.classList.add('is-active');
        window.removeEventListener('scroll', addClassOnScroll);
    }
}

window.addEventListener('scroll', addClassOnScroll);
