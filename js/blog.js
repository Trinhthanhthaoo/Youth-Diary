const hamburgerMenu = document.getElementById('hamburgerMenu');
const navMenu = document.getElementById('navMenu');

// Toggle menu khi nhấn vào biểu tượng hamburger
hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
