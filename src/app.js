const express = require('express');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const path = require('path');

const app = express();

// Configuración de Sesiones (Elemento de autenticación)
app.use(session({
  secret: 'secreto-evaluacion-2024',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Cambiar a true si usas HTTPS
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Enrutamiento organizado por el framework
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
