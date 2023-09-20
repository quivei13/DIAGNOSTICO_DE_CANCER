// Selecciona el botón "Volver" por su ID
const botonVolver = document.getElementById("boton-volver");

// Agrega un evento de clic al botón "Volver"
botonVolver.addEventListener("click", function () {
    // Utiliza la función window.history.back() para regresar a la página anterior
    window.history.back();
});



// Selecciona el botón "Registrar Paciente" por su ID
const botonRegistrar = document.getElementById("boton-registrar");

// Agrega un evento de clic al botón "Registrar Paciente"
botonRegistrar.addEventListener("click", function () {
    // Aquí puedes realizar la lógica de envío del formulario, como enviar datos al servidor o realizar validaciones.

    // Si el envío se realiza con éxito, muestra el mensaje de confirmación
    mostrarMensajeConfirmacion();

    
});

// Función para mostrar el mensaje de confirmación (igual que antes)
function mostrarMensajeConfirmacion() {
    
}

