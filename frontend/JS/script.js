document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Aquí puedes agregar la lógica de autenticación
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Ejemplo de autenticación básica
        if (username === "usuario" && password === "contraseña") {
            alert("Inicio de sesión exitoso");
            // Redireccionar a la página principal
            window.location.href = "menu.html";
        } else {
            alert("Credenciales incorrectas. Inténtalo de nuevo.");
        }
    });
});
