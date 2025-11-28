document.addEventListener('DOMContentLoaded', () => {
  const loginModal = document.getElementById('loginModal');
  const recoverModal = document.getElementById('recoverModal');
  const forgotLink = document.getElementById('forgotLink');
  const closeRecover = document.getElementById('closeRecover');

  // Abrir login modal
  document.getElementById('ingresarBtn')?.addEventListener('click', () => {
    loginModal.classList.add('show');
  });
   document.getElementById('ingresarBtn1')?.addEventListener('click', () => {
    loginModal.classList.add('show');
  });

  // Cambiar a recuperar contraseña
  forgotLink.addEventListener('click', e => {
    e.preventDefault();
    loginModal.classList.remove('show');
    recoverModal.classList.add('show');
  });

  // Cerrar recuperación
  closeRecover.addEventListener('click', e => {
    e.preventDefault();
    recoverModal.classList.remove('show');
    loginModal.classList.add('show');
  });

  // Cerrar modales al hacer clic fuera
  [loginModal, recoverModal].forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) modal.classList.remove('show');
    });
  });

  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    if (usuario === "" || password === "") {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Redirigir al sistema interno
    window.location.href = "interno/index.html";
  });
});
