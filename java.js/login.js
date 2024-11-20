document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de correo y contraseña
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación simple (puedes modificar esto para una validación real)
    const validEmail = "usuario@ejemplo.com";
    const validPassword = "contraseña123";

    if (email === validEmail && password === validPassword) {
        // Si es correcto, redirigir a la página deseada
        window.location.href = "inicio.html"; // Aquí coloca la ruta de tu página de "Flota de Motors Value"
    } else {
        // Si es incorrecto, mostrar un mensaje de error
        alert("Correo o contraseña incorrectos. Inténtalo de nuevo.");
    }
});
