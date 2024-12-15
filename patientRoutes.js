// routes/patientRoutes.js
const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// Ajouter un patient
router.post('/', async (req, res) => {
  const { matricule, nom, prenom, dateNaissance, resultatsMedicaux } = req.body;
  const newPatient = new Patient({ matricule, nom, prenom, dateNaissance, resultatsMedicaux });
  try {
    const savedPatient = await newPatient.save();
    res.json(savedPatient);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Liste des patients
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
