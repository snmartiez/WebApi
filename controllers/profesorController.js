// controllers/profesorController.js
const { Persona, Profesor } = require('../models');

exports.crearProfesor = async (req, res) => {
  const { documento, nombres, apellidos, sexo, telefono, email } = req.body;

  try {
    // Crear una nueva Persona
    const nuevaPersona = await Persona.create({
      documento,
      nombres,
      apellidos,
      sexo,
      telefono,
      email
    });

    // Crear un nuevo Profesor asociado a la Persona
    const nuevoProfesor = await Profesor.create({
      id_persona: nuevaPersona.id,  // Asociar con la nueva persona
      documento
    });

    res.status(201).json({
      message: 'Profesor creado exitosamente',
      data: { nuevaPersona, nuevoProfesor }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error al crear el profesor',
      error: error.message
    });
  }
};
