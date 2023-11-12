//BOTON VOLVER
const botonVolver = document.getElementById("boton-volver");
botonVolver.addEventListener("click", function () {
    window.history.back();
});

//BOTON CERRAR SESION
const botonCerrarSesion = document.getElementById("cerrar-sesion");
botonCerrarSesion.addEventListener("click", function () {
  window.location.href = "index.html";
});

// CARGAR PACIENTES EN LA TABLA
function cargarPacientes() {
  fetch('/api/pacientes', { method: 'GET' })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var tablaPacientes = document.getElementById('tabla-pacientes');
      tablaPacientes.innerHTML = '';
      data.forEach(function (paciente) {
        var fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${paciente.rut}</td>
          <td>${paciente.nombre}</td>
          <td>${paciente.apellido_paterno}</td>
          <td>${paciente.apellido_materno}</td>
        `;
        tablaPacientes.appendChild(fila);
      });
    })
    .catch(function (error) {
      console.error('Error al cargar pacientes:', error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  cargarPacientes();
});

//BOTON BUSCAR POR RUT
document.addEventListener("DOMContentLoaded", function () {
  cargarPacientes();
  const buscarPacienteForm = document.getElementById("buscar-paciente-form");
  buscarPacienteForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const rutInput = document.getElementById("rut");
    const rut = rutInput.value;
    fetch(`/api/pacientes/get/${rut}`, { method: 'GET' })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const tablaPacientes = document.getElementById('tabla-pacientes');
        tablaPacientes.innerHTML = '';
        if (data) {
          var fila = document.createElement('tr');
          fila.innerHTML = `
            <td>${data.rut}</td>
            <td>${data.nombre}</td>
            <td>${data.apellido_paterno}</td>
            <td>${data.apellido_materno}</td>
          `;
          tablaPacientes.appendChild(fila);
        } else {
          tablaPacientes.innerHTML = '<tr><td colspan="15">Paciente no encontrado</td></tr>';
        }
      })
      .catch(function (error) {
        console.error('Error al buscar paciente:', error);
      });
  });
});

//BOTON REALIZAR PREDICCION
const botonPrediccion = document.getElementById("boton-prediccion");
botonPrediccion.addEventListener("click", function () {
  const rutInput = document.getElementById("rut");
  const rut = rutInput.value;
  // Obtén los demás datos del paciente que necesitas para la predicción
  const datosPaciente = {
    rut: rut,
    // Agrega aquí los demás datos necesarios para la predicción
  };
  // Envía la solicitud POST al servidor para realizar la predicción
  fetch('/api/realizar-prediccion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosPaciente)
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Muestra el valor de la columna que se está intentando predecir en el elemento con el ID "resultado-prediccion"
      const resultadoPrediccion = document.getElementById("resultado-prediccion");
      resultadoPrediccion.innerText = "Resultado de la predicción: " + data.valorColumna; // Reemplaza "valorColumna" con el nombre de la columna que se está intentando predecir
    })
    .catch(function (error) {
      console.error('Error al realizar la predicción:', error);
    });
});
