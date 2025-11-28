// Animaciones de aparición con IntersectionObserver
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // deja de observar una vez visible
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));

// Botón volver arriba (opcional)
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '⬆️';
scrollBtn.className = 'fixed bottom-6 right-6 bg-principal text-white p-3 rounded-full shadow-lg text-lg opacity-0 transition duration-300';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollBtn.style.opacity = '1';
  } else {
    scrollBtn.style.opacity = '0';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
