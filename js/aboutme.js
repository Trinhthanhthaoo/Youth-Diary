import Lenis from "https://cdn.skypack.dev/@studio-freight/lenis@0.1.12";

// parallax
// https://github.com/yitengjun/ukiyo-js
const els = document.querySelectorAll(".ukiyo");
els.forEach((el) => {
  const parallax = new Ukiyo(el);
});

const lenis = new Lenis({
    lerp: 0.075,  // Adjust lerp for smoother motion
    smooth: true,
    direction: "vertical"
  });
  
  function raf() {
    lenis.raf();
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  