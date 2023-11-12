// app.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const { spawn } = require('child_process');
const modeloPath = path.join(__dirname, 'modelo_logistico.pkl');
const scriptPath = path.join(__dirname, 'cargar_modelo.py');
const pythonPath = 'C:\\Users\\joaco\\AppData\\Local\\Programs\\Python\\Python311\\python.exe';
const options = {
  pythonPath: pythonPath,
  args: [modeloPath],
};

app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

const pacientesRouter = require('./routes/pacientes');
const experienciaRouter = require('./routes/experiencia');
const funcionarioRouter = require('./routes/funcionario');
const inicioSesionRouter = require('./routes/login');

app.use('/api/pacientes', pacientesRouter);
app.use('/api/experiencia', experienciaRouter);
app.use('/api/funcionario', funcionarioRouter);
app.use('/api/login', inicioSesionRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});

app.post('/api/realizar-prediccion', (req, res) => {
  try {
    const datosPaciente = req.body;
    const procesoPython = spawn(pythonPath, [scriptPath, JSON.stringify(datosPaciente)], options);
    procesoPython.on('close', (code) => {
      if (code === 0) {
        console.log('Predicción realizada exitosamente');
        // Maneja el resultado de la predicción aquí
        const resultadoPrediccion = 'valor de la columna'; // Reemplaza "valor de la columna" con el valor real de la columna que se está intentando predecir
        res.json({ valorColumna: resultadoPrediccion });
      } else {
        console.error('Error al realizar la predicción');
        res.status(500).json({ error: 'Error al realizar la predicción' });
      }
    });
  } catch (error) {
    console.error('Error al realizar la predicción:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

const cargarModelo = () => {
  return new Promise((resolve, reject) => {
    const procesoPython = spawn(pythonPath, [scriptPath]);
    procesoPython.on('close', (code) => {
      if (code === 0) {
        console.log('Modelo cargado exitosamente');
        resolve();
      } else {
        console.error('Error al cargar el modelo');
        reject();
      }
    });
  });
};

cargarModelo()
  .then(() => {
    console.log('El modelo se ha cargado exitosamente');
    // Continúa con el resto de tu código aquí
  })
  .catch(() => {
    console.error('Ocurrió un error al cargar el modelo');
    // Maneja el error aquí
  });
