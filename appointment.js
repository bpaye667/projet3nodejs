// models/Appointment.js
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  heure: { type: String, required: true },
  type: { type: String, required: true },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  medecin: { type: String, required: true },
  service: { type: String, required: true }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
