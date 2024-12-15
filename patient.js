// models/Patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  matricule: { type: String, required: true },
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  dateNaissance: { type: Date, required: true },
  resultatsMedicaux: { type: String },
  dateCreation: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Patient', patientSchema);
