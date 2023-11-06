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
const prediccionRouter = require('./routes/prediccion');

app.use('/api/pacientes', pacientesRouter);
app.use('/api/experiencia', experienciaRouter); // Monta las rutas de experiencia en '/api/experiencia'
app.use('/api/funcionario', funcionarioRouter);
app.use('/api/login', inicioSesionRouter);
app.use('/api/prediccion', prediccionRouter);


// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});



// Cargar modelo de ML
////////////////////////////////////////////////////////////////

const { PythonShell } = require('python-shell');

// Ruta completa al script de Python
const scriptPath = path.join(__dirname, 'cargar_modelo.py');

// Ruta al intérprete de Python
const pythonPath = 'C:\\Users\\joaco\\AppData\\Local\\Programs\\Python\\Python311\\python.exe';

// Opciones de PythonShell
const options = {
    pythonPath: pythonPath,
};

PythonShell.run(scriptPath, options, (err, results) => {
    if (err) {
        console.error(err);
        // Manejar errores al cargar el modelo
    } else {
        // 'results' contiene la salida del script de Python (modelo cargado)
        const modeloLogistico = results[0];
        // Usa 'modeloLogistico' para realizar predicciones
    }
});
//////////////////////////////////////////////////////////////

