const items = document.querySelectorAll(
  ".fade-in, .fade-in-up, .card-slide-up, .flow-slide"
);

function reveal() {
  items.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.85) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);