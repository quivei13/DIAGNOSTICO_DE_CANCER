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



//BOTON CERRAR SESION
////////////////////////////////////////////////////////////////////////////////////////
// Obtén el botón "Cerrar Sesión" por su ID
const botonCerrarSesion = document.getElementById("cerrar-sesion");

// Agrega un controlador de eventos al botón
botonCerrarSesion.addEventListener("click", function () {
  // Aquí debes realizar el cierre de sesión, por ejemplo, si estás utilizando cookies o sessionStorage, puedes borrar la información de sesión.
  
  // Luego, redirecciona a la página "index.html"
  window.location.href = "index.html";
});
////////////////////////////////////////////////////////////////////////////////////////


// CARGAR PACIENTES EN LA TABLA
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



//BOTON BUSCAR POR RUT
////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  cargarPacientes();

  // Obtén el formulario y agrega un controlador de eventos
  const buscarPacienteForm = document.getElementById("buscar-paciente-form");

  buscarPacienteForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se recargue la página

    // Obtén el valor del campo de entrada del Rut
    const rutInput = document.getElementById("rut");
    const rut = rutInput.value;

    // Realiza una solicitud GET al servidor para buscar pacientes por Rut
    fetch(`/api/pacientes/get/${rut}`, { method: 'GET' })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Limpia la tabla antes de agregar los resultados de la búsqueda
        const tablaPacientes = document.getElementById('tabla-pacientes');
        tablaPacientes.innerHTML = '';

        if (data) {
          // Crea una fila para mostrar el paciente encontrado
          var fila = document.createElement('tr');
          fila.innerHTML = `
            <td>${data.rut}</td>
            <td>${data.nombre}</td>
            <td>${data.apellido_paterno}</td>
            <td>${data.apellido_materno}</td>
          `;

          // Agrega la fila a la tabla
          tablaPacientes.appendChild(fila);
        } else {
          // Si no se encuentra ningún paciente, muestra un mensaje
          tablaPacientes.innerHTML = '<tr><td colspan="15">Paciente no encontrado</td></tr>';
        }
      })
      .catch(function (error) {
        console.error('Error al buscar paciente:', error);
      });
  });
});
////////////////////////////////////////////////////////////////////////////////////////

