const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");

  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

// Automatic Slideshow
function autoSlides() {
  slideIndex++;
  if (slideIndex >= document.getElementsByClassName("mySlides").length) {
    slideIndex = 0;
  }
  showSlides(slideIndex);
  setTimeout(autoSlides, 8000); // Change slide every 4 seconds
}

autoSlides(); // Start the automatic slideshow


//activiti
function main() {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    let index = 0; // default: 0
    const wrapper = slider.querySelector(".slider-wrapper");
    const slides = slider.querySelectorAll(".slide");
    const slidesControls = slider.querySelector(".slider-controls");
    const leftBtn = slider.querySelector(".slide-control-left");
    const rightBtn = slider.querySelector(".slide-control-right");

    if (!slides) return

    function controls() {
      if (index === 0) {
        leftBtn.classList.add('slide-control-disabled')
      } else {
        leftBtn.classList.remove('slide-control-disabled')
      }

      if (index === slides.length - 1) {
        rightBtn.classList.add('slide-control-disabled')
      } else {
        rightBtn.classList.remove('slide-control-disabled')
      }
    }
    
    function setSlides() {
      slides.forEach((slide) => {
        slide.style.left =
          -(slidesControls.clientWidth * index + (24 * index)) + "px";
        slide.classList.remove("slide-active");
      });
      
      slides[index].classList.add("slide-active");
    }

    if (leftBtn && rightBtn) {
      leftBtn.addEventListener("click", () => {
        if (index > 0 && index <= slides.length) {
          index--;
          setSlides();
        }
        
        controls();
      });

      rightBtn.addEventListener("click", () => {
        if (index >= 0 && index < slides.length - 1) {
          index++;
          setSlides();
        }
        
        controls();
      });
    }

    setSlides();
    controls();
  });
}

main();
