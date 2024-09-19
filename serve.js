require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/auth');
const profesorRoutes = require('./routes/profesorRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/profesores', profesorRoutes);
app.use('/user',userRoutes);

// Rutas protegidas
app.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: "Ruta protegida", userId: req.userId, role: req.userRole });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));