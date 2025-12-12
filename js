// reveal on scroll
const revealElements = document.querySelectorAll(
  ".fade-in, .fade-in-up, .card-slide-up, .flow-slide"
);

function revealOnScroll() {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);