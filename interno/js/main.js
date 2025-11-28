document.addEventListener('DOMContentLoaded', () => {

  // Toggle menú lateral
  const toggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }

});
