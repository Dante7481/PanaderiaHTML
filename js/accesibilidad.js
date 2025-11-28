// ====== Menú de Accesibilidad ======
const menuBtn = document.getElementById('accessibility-btn');
const menu = document.getElementById('accessibility-menu');
const closeMenu = document.getElementById('close-menu');

// Mostrar/Ocultar menú
menuBtn.addEventListener('click', () => menu.classList.toggle('hidden'));
closeMenu.addEventListener('click', () => menu.classList.add('hidden'));

// Atajo Ctrl+U
document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.key.toLowerCase() === 'u') {
    e.preventDefault();
    menu.classList.toggle('hidden');
  }
});

// Funciones
const acciones = {
  contraste: () => document.body.classList.toggle('high-contrast'),
  resaltar: () => document.body.classList.toggle('resaltar'),
  texto: () => document.body.classList.toggle('texto-grande'),
  espaciado: () => document.body.classList.toggle('espaciado'),
  detener: () => document.body.classList.toggle('sin-animaciones'),
  ocultar: () => document.body.classList.toggle('ocultar-img'),
  dislexia: () => document.body.classList.toggle('dislexia'),
  cursor: () => document.body.classList.toggle('cursor'),
  saturacion: () => document.body.classList.toggle('saturacion'),
  reset: () => {
    document.body.className = '';
    alert('Configuraciones de accesibilidad restablecidas.');
  }
};

// Asignar eventos
document.querySelectorAll('#accessibility-menu button').forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.action;
    if (acciones[action]) acciones[action]();
  });
});
// Cerrar modales con ESC
document.addEventListener('keydown', (e) => {
  const loginModal = document.getElementById("loginModal");
  const recoverModal = document.getElementById("recoverModal");

  if (e.key === "Escape") {
    loginModal?.classList.remove("show");
    recoverModal?.classList.remove("show");
  }
});
