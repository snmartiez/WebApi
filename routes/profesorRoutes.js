// routes/profesorRoutes.js
const express = require('express');
const router = express.Router();
const profesorController = require('../controllers/profesorController');

// Ruta para insertar un nuevo profesor
router.post('/crear', profesorController.crearProfesor);

module.exports = router;
