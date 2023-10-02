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
app.use('/api/pacientes', pacientesRouter);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});