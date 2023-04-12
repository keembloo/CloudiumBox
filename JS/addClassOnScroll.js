export default function addClassOnScroll(selector) {
    const element = document.querySelector(selector);

    function handleScroll() {
        if (element.getBoundingClientRect().top <= window.innerHeight) {
            element.classList.add('is-active');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
}

