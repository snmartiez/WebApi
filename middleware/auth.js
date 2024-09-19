const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send({ message: "Token no proporcionado" });

  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) return res.status(500).send({ message: "Fallo de autenticación" });
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};
