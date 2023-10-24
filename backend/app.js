// app.js

const express = require('express');
const path = require('path'); // Importa el módulo 'path'
const app = express();
const port = process.env.PORT || 3000; // Puedes cambiar el puerto según tus preferencias

// Configura middleware para manejar solicitudes JSON
app.use(express.json());

// Configura Express para servir archivos estáticos desde la carpeta 'frontend'
app.use(express.static(path.join(__dirname, 'frontend')));


// Rutas
const pacientesRouter = require('./routes/pacientes'); // Crea este archivo y define tus rutas
const experienciaRouter = require('./routes/experiencia'); // Nueva ruta para la experiencia
const funcionarioRouter = require('./routes/funcionario');
const inicioSesionRouter = require('./routes/login');

app.use('/api/pacientes', pacientesRouter);
app.use('/api/experiencia', experienciaRouter); // Monta las rutas de experiencia en '/api/experiencia'
app.use('/api/funcionario', funcionarioRouter);
app.use('/api/login', inicioSesionRouter);


// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});
