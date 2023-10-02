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


//CARGA DE TABLA PACIENTES
////////////////////////////////////////////////////////////////////////////////////////
function cargarPacientes() {
    // Realizar una solicitud GET al servidor para obtener los datos de los pacientes
    fetch('/api/pacientes', { method: 'GET' })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Llenar la tabla con los datos obtenidos
        var tablaPacientes = document.getElementById('tabla-pacientes');
        tablaPacientes.innerHTML = ''; // Limpia cualquier contenido previo

        data.forEach(function (paciente) {
          // Crea una nueva fila en la tabla para cada paciente
          var fila = document.createElement('tr');
          // Agrega las celdas de datos
          fila.innerHTML = `
            <td>${paciente.rut}</td>
            <td>${paciente.nombre}</td>
            <td>${paciente.apellido_paterno}</td>
            <td>${paciente.apellido_materno}</td>
            <td>${paciente.genero}</td>
            <td>${paciente.fecha_de_nacimiento}</td>
            <td>${paciente.correo_electronico}</td>
            <td>${paciente.telefono}</td>
            <td>${paciente.edad}</td>
            <td>${paciente.cancer}</td>
            <td>${paciente.diagnostico_inicial}</td>
            <td>${paciente.radiografias}</td>
            <td>${paciente.condiciones_fisicas}</td>
            <td>${paciente.condiciones_ambientales}</td>
            <td>${paciente.datos_gen_mol}</td>
            <td>${paciente.historia_medica}</td>
          `;
          // Agrega la fila a la tabla
          tablaPacientes.appendChild(fila);
        });
      })
      .catch(function (error) {
        console.error('Error al cargar pacientes:', error);
      });
  };

  document.addEventListener("DOMContentLoaded", function () {
    cargarPacientes();
  });
  
////////////////////////////////////////////////////////////////////////////////////////
