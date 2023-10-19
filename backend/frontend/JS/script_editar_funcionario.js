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
const formulario = document.getElementById("editar-funcionario-form"); // Reemplaza "tu-formulario-id" con el ID de tu formulario

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


//BOTON BUSCAR
////////////////////////////////////////////////////////////////////////////////////////
// Agrega un evento de clic al botón "Buscar"
const botonBuscar = document.querySelector("#buscador button");
botonBuscar.addEventListener("click", function () {
  // Obtén el valor del campo de entrada con el ID "rut"
  const rut = document.querySelector("#rut").value;

  // Realiza una solicitud AJAX para buscar el funcionario por RUT
  // Reemplaza esta URL por la ruta adecuada en tu servidor
  const url = `/api/funcionario/${rut}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.length > 0) {
        // Completa los campos del formulario con los datos del funcionario
        const funcionario = data[0]; // Suponiendo que se devuelve un solo registro
        document.querySelector("#nombres").value = funcionario.nombre;
        document.querySelector("#apellido-paterno").value = funcionario.apellido_paterno;
        document.querySelector("#apellido-materno").value = funcionario.apellido_materno;
        document.querySelector("#genero").value = funcionario.genero;

        const fechaNacimiento = funcionario.fecha_de_nacimiento;;
        const fechaNacimientoObj = new Date(fechaNacimiento);
        document.querySelector("#fecha-nacimiento").value = fechaNacimientoObj.toISOString().split('T')[0];

        document.querySelector("#mail").value = funcionario.correo_electronico;
        document.querySelector("#telefono").value = funcionario.telefono;
        document.querySelector("#edad").value = funcionario.edad;
        document.querySelector("#contraseña").value = funcionario.contraseña;
        document.querySelector("#area-profesion").value = funcionario.area_profesion;

        const leerCheckbox = document.getElementById("leer");
        const registrarCheckbox = document.getElementById("registrar");
        const borrarCheckbox = document.getElementById("borrar");
        const actualizarCheckbox = document.getElementById("actualizar");

        // Marcar o desmarcar los checkboxes según los valores de la base de datos
        leerCheckbox.checked = funcionario.leer;
        registrarCheckbox.checked = funcionario.registrar;
        borrarCheckbox.checked = funcionario.borrar;
        actualizarCheckbox.checked = funcionario.actualizar;


      } else {
        alert("Funcionario no encontrado.");
      }
    })
    .catch((error) => {
      console.error("Error al buscar el funcionario:", error);
    });
});
////////////////////////////////////////////////////////////////////////////////////////

