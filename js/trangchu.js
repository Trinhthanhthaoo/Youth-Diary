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
