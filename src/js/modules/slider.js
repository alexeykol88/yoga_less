function slider() {

  const slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
    
  let slideIndex = 1;

  showSlides(slideIndex);

  function showSlides(index) {

    if (index > slides.length) {
      slideIndex = 1;
    }
    if (index < 1) {
      slideIndex = slides.length;
    }
   
    slides.forEach((item) => {

      item.style.display = 'none';

      dots.forEach((item) => {
        item.classList.remove('dot-active');
      });

      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].classList.add('dot-active');
    });
  }

  function changeSlide(index) {
    showSlides(slideIndex += index);
  }

  function currentSlide(index) {
    showSlides(slideIndex = index);
  }

  prev.addEventListener('click', () => {
    changeSlide(-1);
  });

  next.addEventListener('click', () => {
    changeSlide(1);
  });

  dotsWrap.addEventListener('click', (event) => {
    for (let i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') 
      && event.target == dots[i-1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;