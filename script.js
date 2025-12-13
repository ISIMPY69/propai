// Mark body as JS-loaded for progressive enhancement
document.body.classList.add("js-loaded");

// Scroll reveal animation
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
// Also run immediately in case load already fired
reveal();

// Cookie Consent Banner
(function() {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept");
  const rejectBtn = document.getElementById("cookie-reject");

  // Check if user has already made a choice
  const cookieConsent = localStorage.getItem("cookieConsent");

  if (cookieConsent) {
    // User has already made a choice, hide the banner
    cookieBanner.classList.add("hidden");
  }

  // Handle Accept button click
  acceptBtn.addEventListener("click", function() {
    localStorage.setItem("cookieConsent", "accepted");
    cookieBanner.classList.add("hidden");
  });

  // Handle Reject button click
  rejectBtn.addEventListener("click", function() {
    localStorage.setItem("cookieConsent", "rejected");
    cookieBanner.classList.add("hidden");
  });
})();
