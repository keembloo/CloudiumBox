document.addEventListener('DOMContentLoaded', () => {
    const cardSlider = document.querySelector('.slider');
    const items = cardSlider.querySelectorAll('.slider__item');
    const tabs = cardSlider.querySelectorAll('.slider__tab');
    let currentSlide = 0;
    let isPaused = false;
    let intervalId = null;
  
    function showSlide(index) {
      items[currentSlide].classList.remove('is-active');
      tabs[currentSlide].classList.remove('is-active');
      items[index].classList.add('is-active');
      tabs[index].classList.add('is-active');
      currentSlide = index;
    }
  
    function nextSlide() {
      if (currentSlide === items.length - 1) {
        showSlide(0);
      } else {
        showSlide(currentSlide + 1);
      }
    }
  
    function startSlider() {
      intervalId = setInterval(() => {
        if (!isPaused) {
          nextSlide();
        }
      }, 3000);
    }
  
    function pauseSlider() {
      clearInterval(intervalId);
    }
  
    startSlider();
  
    //웹 접근성을 위한 멈춤 효과
    cardSlider.addEventListener('mouseover', () => {
        isPaused = true;
        pauseSlider();
    });
      
    cardSlider.addEventListener('mouseout', () => {
        isPaused = false;
        startSlider();
    });
      
    cardSlider.addEventListener('focus', () => {
        isPaused = true;
        pauseSlider();
    });
      
    cardSlider.addEventListener('blur', () => {
        isPaused = false;
        startSlider();
    });
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('mouseover', () => {
            if (index !== currentSlide) {
                showSlide(index);
                pauseSlider();
            }
        });
    });
});
