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


//BOTON LIMPIAR CAMPOS
////////////////////////////////////////////////////////////////////////////////////////
// Selecciona el botón "Limpiar Campos" por su ID
const botonLimpiarCampos = document.getElementById("limpiar-campos");

// Selecciona el formulario por su ID
const formulario = document.getElementById("registrar-funcionario-form"); // Reemplaza "tu-formulario-id" con el ID de tu formulario

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