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


//CHECKBOX FILTROS
////////////////////////////////////////////////////////////////////////////////////////
// Selecciona todos los checkboxes con la clase "habilitar-input"
const checkboxes = document.querySelectorAll(".habilitar-input");

// Agrega un evento de cambio a cada checkbox
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        // Obtiene el ID del campo de entrada objetivo desde el atributo "data-target"
        const targetId = checkbox.getAttribute("data-target");
        const campoDeEntrada = document.getElementById(targetId);

        // Habilita o deshabilita el campo de entrada según el estado del checkbox
        campoDeEntrada.disabled = !checkbox.checked;
    });
});
////////////////////////////////////////////////////////////////////////////////////////




