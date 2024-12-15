// server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const patientRoutes = require('./routes/patientRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuration de la connexion à la base de données MySQL
const db = mysql.createConnection({
  host: 'localhost',      // Hôte de la base de données, souvent 'localhost'
  user: 'root',           // Nom d'utilisateur MySQL (par défaut 'root' en local)
  password: '',           // Mot de passe pour l'utilisateur MySQL (vide si aucune configuration)
  database: 'gestion_rdv' // Nom de la base de données
});

// Connexion à MySQL
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à MySQL:', err.stack);
    return;
  }
  console.log('Connecté à MySQL en tant que id ' + db.threadId);
});

// Routes pour gérer les patients et les rendez-vous
app.use('/api/patients', patientRoutes(db));  // Passer la connexion à la route
app.use('/api/appointments', appointmentRoutes(db));  // Passer la connexion à la route

// Lancer le serveur
app.listen(3000, () => {
  console.log('Serveur lancé sur le port 3000');
});
