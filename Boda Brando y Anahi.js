// ------------ Menú deslizable ------------
document.getElementById('toggle-menu').addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open'); // Alterna la clase 'open'
});

// ------------ Año dinámico en footer ------------
document.getElementById('year').textContent = new Date().getFullYear();

// ------------ Carrusel automático ------------
// ————— Carrusel 3-imágenes con clase “active” —————
const slides = document.querySelectorAll('.carousel-image');
let current = 0;

function updateCarousel() {
  // Marca “active” en la imagen central
  slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
  // Desplaza el track para centrar la imagen activa
  const track = document.querySelector('.carousel-track');
  // Calcula porcentaje: movemos de modo que el activo quede centrado
  const offset = - (current - 1) * (100 / 3);
  track.style.transform = `translateX(${offset}%)`;
}

// Inicialización
updateCarousel();

// Flechas
document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  updateCarousel();
});
document.querySelector('.carousel-btn.next').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  updateCarousel();
});


if (slides.length) {
  showSlide(0); // Muestra la primera imagen al cargar
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 3000); // Cambia cada 3 segundos
}

// ------------ Cronómetro regresivo ------------
const targetDate = new Date('August 24, 2025 18:00:00').getTime();

function updateCountdown() {
  const now = Date.now();
  const diff = targetDate - now;
  if (diff < 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(mins).padStart(2, '0');
  document.getElementById('seconds').textContent = String(secs).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Ejecuta inmediatamente al cargar