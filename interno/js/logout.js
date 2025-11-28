document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');

    if (!logoutBtn) {
        console.error("⚠ logoutBtn no encontrado en el DOM");
        return;
    }

    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (confirm("¿Deseas cerrar sesión?")) {
            window.location.href = "../index.html";
        }
    });
});
