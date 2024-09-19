const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Crear un nuevo usuario
router.post('/crear', userController.crearUser);
// Editar un usuario existente por ID
router.put('/editar/:id', userController.editarUsuario);
// Eliminar un usuario por ID
router.delete('/eliminar/:id', userController.eliminarUsuario);
// Listar todos los usuarios
router.get('/listar', userController.listarUsuarios);

module.exports = router;


