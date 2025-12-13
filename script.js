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
.cookie-banner {
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: 16px;
  z-index: 9999;
}

.cookie-inner {
  max-width: 1100px;
  margin: 0 auto;
  background: rgba(10, 12, 20, 0.92);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px;
  padding: 14px 16px;
  display: flex;
  gap: 14px;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(8px);
}

.cookie-text p {
  margin-top: 6px;
  color: rgba(255,255,255,0.82);
  font-size: 14px;
  line-height: 1.4;
}

.cookie-text a { color: #fff; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.35); }
.cookie-text a:hover { border-bottom-color: rgba(255,255,255,0.8); }

.cookie-actions { display: flex; gap: 10px; flex-shrink: 0; }

.btn {
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: 700;
  border: 1px solid rgba(255,255,255,0.14);
  background: transparent;
  color: #fff;
  cursor: pointer;
}

.cookie-btn-primary {
  background: linear-gradient(90deg, #3A68FF, #8854FF);
  border: none;
}

.cookie-btn-ghost { background: transparent; }

@media (max-width: 720px) {
  .cookie-inner { flex-direction: column; align-items: stretch; }
  .cookie-actions { justify-content: flex-end; }
}