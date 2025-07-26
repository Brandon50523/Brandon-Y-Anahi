document.addEventListener('DOMContentLoaded', () => {
// Actualizar año en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Carrusel
 const track   = document.querySelector('.carousel-track');
const slides  = Array.from(track.children);
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

if (slides.length && btnPrev && btnNext) {
  // Calculamos ancho dinámico de cada slide (incluye margin-right)
  const style      = window.getComputedStyle(slides[0]);
  const marginRight= parseFloat(style.marginRight);
  const slideWidth = slides[0].getBoundingClientRect().width + marginRight;

  let currentIndex = 0;
  slides.forEach((slide, idx) => {
    slide.style.left = `${slideWidth * idx}px`;
  });

  function moveTo(index) {
    track.style.transform = `translateX(-${slideWidth * index}px)`;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  }

  btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveTo(currentIndex);
  });
  btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveTo(currentIndex);
  });

  moveTo(0);
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveTo(currentIndex);
  }, 3000);
}

  // Countdown
  (function() {
    const daysEl    = document.getElementById('days');
    const hoursEl   = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownContainer = document.getElementById('countdown');
    const target = new Date('2025-08-24T18:00:00').getTime();

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl || !countdownContainer) return;

    function update() {
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) {
        clearInterval(interval);
        countdownContainer.innerHTML = '¡Es hora de la boda!';
        return;
      }
      const days = Math.floor(diff / 86400000);
      const hrs  = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      daysEl.textContent    = String(days).padStart(2, '0');
      hoursEl.textContent   = String(hrs).padStart(2, '0');
      minutesEl.textContent = String(mins).padStart(2, '0');
      secondsEl.textContent = String(secs).padStart(2, '0');
    }

    const interval = setInterval(update, 1000);
    update();
  })();

  // Confirmación
  document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const confirmSection = document.getElementById('confirmacion');
const successSection = document.getElementById('confirmacion-exitosa');
if (confirmSection) confirmSection.style.display = 'none';
if (successSection) successSection.style.display = 'block';  // Mostrar confirmación exitosa

document.addEventListener('DOMContentLoaded', () => {
  // Obtener referencias a secciones
  const confirmSection = document.getElementById('confirmacion');
  const successSection = document.getElementById('confirmacion-exitosa');

  // Controlador en los enlaces de contacto (Brandon y Anahí)
  document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      if (confirmSection) confirmSection.style.display = 'none';
      if (successSection) successSection.style.display = 'block';
      // Esperar brevemente y redirigir a WhatsApp
      setTimeout(() => {
        window.location.href = link.href;
      }, 500);
    });
  });

  // Controlador para “Confirmar nuevamente”
  const btnConfirmAgain = document.getElementById('confirm-again');
  if (btnConfirmAgain) {
    btnConfirmAgain.addEventListener('click', e => {
      e.preventDefault();
      if (successSection) successSection.style.display = 'none';
      if (confirmSection) confirmSection.style.display = 'block';
    });
  }
});

      // Mostrar feedback
      const success = document.getElementById('confirmacion-exitosa') ||
                      (function() {
                        const el = document.createElement('section');
                        el.id = 'confirmacion-exitosa';
                        el.innerHTML = `
                          <h2>¡Confirmación Exitosa!</h2>
                          <div class="confirmacion-contenido">
                            <lottie-player
                              src="https://assets5.lottiefiles.com/packages/lf20_jbrw3hcz.json"
                              background="transparent" speed="1"
                              style="width:150px;height:150px;" autoplay>
                            </lottie-player>
                            <p>Gracias por confirmar tu asistencia. ¡Esperamos verte en el evento!</p>
                          </div>`;
                        document.querySelector('main').appendChild(el);
                        return el;
                      })();

      // Redirigir tras breve pausa
      setTimeout(() => {
        window.location.href = link.href;
      }, 500);
    });
  });
});
