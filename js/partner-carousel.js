let btnPrev = document.querySelector('.partner__carousel .btn-prev');
let btnNext = document.querySelector('.partner__carousel .btn-next');
let partnerList = document.querySelector('.partner__list');
let partnerListItems = document.querySelectorAll('.partner__list li');
let partnerCount = document.querySelectorAll('.partner__list li').length;

const addedCount = 6;
let index = addedCount;
let distance = partnerList.clientWidth / partnerCount;
const slides = setSlide();
let handleCarousel = setInterval(carousel, 2000);

partnerList.innerHTML = '';
partnerList.append(...slides);

window.addEventListener('resize', () => {
    btnPrev = document.querySelector('.partner__carousel .btn-prev');
    btnNext = document.querySelector('.partner__carousel .btn-next');
    partnerList = document.querySelector('.partner__list');
    partnerListItems = document.querySelectorAll('.partner__list li');
    partnerCount = document.querySelectorAll('.partner__list li').length;
    distance = partnerList.clientWidth / partnerCount;
})

setCarousel();

function setSlide() {
    let addedFront = [];
    let addedLast = [];
    let index = 0;
    while (index < addedCount) {
        addedLast.push(partnerListItems[index].cloneNode(true));
        addedFront.unshift(partnerListItems[partnerListItems.length - 1 - index].cloneNode(true));
        index++;
    }
    return [...addedFront, ...partnerListItems, ...addedLast];
}

function setCarousel() {
    partnerList.style.transform = `translate3d(${index * distance * - 1}px, 0, 0)`;
}

partnerList.style.transition = "300ms ease-out";

btnPrev.addEventListener('click', () => {
    carousel('prev');
})

btnNext.addEventListener('click', () => {
    carousel();
})

function replaceCarousel(end) {
    setTimeout(() => {
        partnerList.style.transition = "0s ease-out";
        index = end ? partnerCount : addedCount;
        setCarousel();
        setTimeout(() => {
            partnerList.style.transition = "300ms ease-out";
        }, 100);
    }, 300);
}

function carousel(direction = 'next') {
    clearInterval(handleCarousel);
    const num = direction === 'prev' ? -1 : 1;
    index += num;
    setCarousel();
    if (index === partnerCount + addedCount) {
        replaceCarousel();
    } else if (index === 0) {
        replaceCarousel('end');
    }
    handleCarousel = setInterval(carousel, 2000);
}

