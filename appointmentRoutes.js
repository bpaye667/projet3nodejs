// routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Ajouter un rendez-vous
router.post('/', async (req, res) => {
  const { date, heure, type, patientId, medecin, service } = req.body;
  const newAppointment = new Appointment({ date, heure, type, patientId, medecin, service });
  try {
    const savedAppointment = await newAppointment.save();
    res.json(savedAppointment);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Liste des rendez-vous
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
