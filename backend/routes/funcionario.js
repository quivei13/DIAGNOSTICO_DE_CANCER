const express = require('express');
const router = express.Router();
const db = require('../db');

// Ruta para obtener todos los funcionarios
// router.get('/', (req, res, next) => {
//   db.query('SELECT * FROM funcionario', (err, results) => {
//     if (err) {
//       return next(err);
//     }
//     res.json(results);
//   });
// });

// Ruta para agregar un nuevo funcionario
router.post('/', (req, res, next) => {
  const { rut, nombre, apellido_paterno, apellido_materno, genero, fecha_de_nacimiento, correo_electronico, telefono, edad, contraseña, area_profesion, leer, registrar, borrar, actualizar } = req.body;

  // Verifica que los campos requeridos estén presentes
  if (!rut || !nombre || !apellido_paterno || !apellido_materno || !genero || !fecha_de_nacimiento || !correo_electronico || !telefono || !edad || !contraseña || !area_profesion || leer === undefined || registrar === undefined || borrar === undefined || actualizar === undefined) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  db.query('INSERT INTO funcionario (rut, nombre, apellido_paterno, apellido_materno, genero, fecha_de_nacimiento, correo_electronico, telefono, edad, contraseña, area_profesion, leer, registrar, borrar, actualizar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [rut, nombre, apellido_paterno, apellido_materno, genero, fecha_de_nacimiento, correo_electronico, telefono, edad, area_profesion, leer, registrar, borrar, actualizar], (err, results) => {
    if (err) {
      return next(err);
    }
    res.status(201).json({ message: 'Funcionario agregado exitosamente' });
  });
});

  
// Ruta para actualizar un funcionario por RUT
  router.put('/:rut', (req, res, next) => {
    const funcionarioRUT = req.params.rut;
    const { rut, nombre, apellido_paterno, apellido_materno, genero, fecha_de_nacimiento, correo_electronico, telefono, edad, contraseña, area_profesion, leer, registrar, borrar, actualizar } = req.body;
  
    // Verifica que los campos requeridos estén presentes
    if (!rut || !nombre || !apellido_paterno || !apellido_materno || !genero || !fecha_de_nacimiento || !correo_electronico || !telefono || !edad || !contraseña || !area_profesion || leer === undefined || registrar === undefined || borrar === undefined || actualizar === undefined) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }
  
    db.query('UPDATE funcionario SET rut = ?, nombre = ?, apellido_paterno = ?, apellido_materno = ?, genero = ?, fecha_de_nacimiento = ?, correo_electronico = ?, telefono = ?, edad = ?, contraseña = ?, area_profesion = ?, leer = ?, registrar = ?, borrar = ?, actualizar = ? WHERE rut = ?', [rut, nombre, apellido_paterno, apellido_materno, genero, fecha_de_nacimiento, correo_electronico, telefono, edad, contraseña, area_profesion, leer, registrar, borrar, actualizar, funcionarioRUT], (err, results) => {
      if (err) {
        return next(err);
      }
      res.json({ message: 'Funcionario actualizado exitosamente' });
    });
  });
//


// Ruta para borrar un funcionario por RUT
  router.delete('/:rut', (req, res, next) => {
    const funcionarioRUT = req.params.rut;
  
    db.query('DELETE FROM funcionario WHERE rut = ?', [funcionarioRUT], (err, results) => {
      if (err) {
        return next(err);
      }
      res.json({ message: 'Funcionario eliminado exitosamente' });
    });
  });
//

  

module.exports = router;
