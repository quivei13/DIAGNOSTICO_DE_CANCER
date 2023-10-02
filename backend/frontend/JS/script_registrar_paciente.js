//BOTON VOLVER
////////////////////////////////////////////////////////////////////////////////////////
// Selecciona el botón "Volver" por su ID
const botonVolver = document.getElementById("boton-volver");

// Agrega un evento de clic al botón "Volver"
botonVolver.addEventListener("click", function () {
    // Utiliza la función window.history.back() para regresar a la página anterior
    window.history.back();
});
////////////////////////////////////////////////////////////////////////////////////////



//BOTON REGISTRAR PACIENTE
////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////



//BOTON LIMPIAR CAMPOS
////////////////////////////////////////////////////////////////////////////////////////
// Selecciona el botón "Limpiar Campos" por su ID
const botonLimpiarCampos = document.getElementById("limpiar-campos");

// Selecciona el formulario por su ID
const formulario = document.getElementById("registrar-paciente-form"); // Reemplaza "tu-formulario-id" con el ID de tu formulario

// Agrega un evento de clic al botón "Limpiar Campos"
botonLimpiarCampos.addEventListener("click", function () {
    // Recorre todos los elementos del formulario
    const elementosFormulario = formulario.elements;
    for (let i = 0; i < elementosFormulario.length; i++) {
        const elemento = elementosFormulario[i];
        // Verifica si el elemento es un campo de entrada (input) o un área de texto (textarea)
        if (elemento.tagName === "INPUT" || elemento.tagName === "TEXTAREA") {
            // Limpia el valor del campo
            elemento.value = "";
        }
    }
});
////////////////////////////////////////////////////////////////////////////////////////
