//INICIO DE SESION
////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    
    // NO TOCAR
    // codigo del formulario de inicio de sesion 
    if (form) { // Verifica si el formulario existe en esta página
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Aquí puedes agregar la lógica de autenticación
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Ejemplo de autenticación básica
            if (username === "usuario" && password === "contraseña") {
                alert("Inicio de sesión exitoso");
                // Redireccionar a la página principal
                window.location.href = "menu_principal.html";
            } else if (username === "administrador" && password === "contraseña") {
                alert("Inicio de sesión exitoso");
                // Redireccionar a la página principal
                window.location.href = "menu_principal_administrador.html";
            } else {
                alert("Credenciales incorrectas. Inténtalo de nuevo.");
            }
        });
    }
});
////////////////////////////////////////////////////////////////////////////////////////

//INICIO DE SESION DB
////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("login-form");
  
//     form.addEventListener("submit", function (e) {
//       e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
//       // Obtiene los valores de usuario y contraseña ingresados por el usuario
//       const username = document.getElementById("username").value;
//       const password = document.getElementById("password").value;
  
//       // Realiza una solicitud al servidor para verificar las credenciales
//       // Puedes usar fetch() o cualquier otra biblioteca para hacer solicitudes HTTP
  
//       // Por ejemplo, podrías hacer una solicitud a un endpoint de autenticación
//       fetch("/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.authenticated) {
//             // El inicio de sesión fue exitoso, redirige a la página principal
//             window.location.href = "/menu_principal.html";
//           } else {
//             // Las credenciales son incorrectas, muestra un mensaje de error
//             alert("Usuario o contraseña incorrectos");
//           }
//         })
//         .catch((error) => {
//           console.error("Error al iniciar sesión:", error);
//         });
//     });
//   });
  