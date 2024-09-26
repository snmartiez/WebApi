const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Users, Persona, Roles } = require('../models');


exports.login = async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const user = await Users.findOne({
      where: { username },
      include: [{ model: Persona, as: 'usuario' }, { model: Roles, as: 'role' }]
    });

    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: "Usuario no encontrado" 
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ 
        success: false, 
        message: "Contraseña incorrecta" 
      });
    }

    const secret = '=I^dmT%-nAG%tBiYp55K';
    const token = jwt.sign({ id: user.id, role: user.role.roleName }, secret, { expiresIn: '1h' });

    // Respuesta exitosa con token
    return res.json({ 
      success: true, 
      token,
      user: {name: user.usuario.nombres+' '+user.usuario.apellidos, email: user.usuario.email, rol: user.role.roleName }
    });

  } catch (error) {
    // Respuesta en caso de error del servidor
    return res.status(500).json({ 
      success: false, 
      message: "Error en el servidor", 
      error: error.message 
    });
  }
};
