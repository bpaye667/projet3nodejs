// pages/AddAppointment.js
import React, { useState } from 'react';
import axios from 'axios';

const AddAppointment = () => {
  const [date, setDate] = useState('');
  const [heure, setHeure] = useState('');
  const [type, setType] = useState('');
  const [medecin, setMedecin] = useState('');
  const [service, setService] = useState('');
  const [patientId, setPatientId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAppointment = { date, heure, type, medecin, service, patientId };
    try {
      await axios.post('http://localhost:3000/api/appointments', newAppointment);
      alert('Rendez-vous ajouté avec succès');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Ajouter un Rendez-vous</h2>
      <form onSubmit={handleSubmit}>
        <input type="datetime-local" onChange={(e) => setDate(e.target.value)} />
        <input type="time" onChange={(e) => setHeure(e.target.value)} />
        <input type="text" placeholder="Type (consultation/examen)" onChange={(e) => setType(e.target.value)} />
        <input type="text" placeholder="Médecin" onChange={(e) => setMedecin(e.target.value)} />
        <input type="text" placeholder="Service" onChange={(e) => setService(e.target.value)} />
        <input type="text" placeholder="ID du Patient" onChange={(e) => setPatientId(e.target.value)} />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddAppointment;
