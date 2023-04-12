const scrollToTopButton = document.querySelector('.btn-top');

window.addEventListener("scroll", () => {
    const scrollToTopButton = document.querySelector('.btn-top');
    if (window.pageYOffset > 50) {
        scrollToTopButton.classList.add("show");
    } else {
        scrollToTopButton.classList.remove("show");
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
