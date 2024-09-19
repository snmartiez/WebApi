
const express = require('express');
const router = express.Router();
const profesorController = require('../controllers/profesorController');

// Ruta para insertar un nuevo profesor
router.post('/crear', profesorController.crearProfesor);

// Ruta para listar todos los profesores
router.get('/listar', profesorController.listarProfesores);

// Ruta para editar un profesor existente por ID
router.put('/editar/:id', profesorController.editarProfesor);

// Ruta para eliminar un profesor por ID
router.delete('/eliminar/:id', profesorController.eliminarProfesor);

module.exports = router;

