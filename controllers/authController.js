const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Users, Persona, Roles } = require('../models');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const user = await Users.findOne({
      where: { username }
      ,include: [{ model: Persona, as: 'usuario' }, { model: Roles, as: 'role' }]
    });

    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ message: "Contraseña incorrecta" });

    const token = jwt.sign({ id: user.id, role: user.role.roleName }, 'secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};
