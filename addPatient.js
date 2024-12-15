// pages/AddPatient.js
import React, { useState } from 'react';
import axios from 'axios';

const AddPatient = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [resultatsMedicaux, setResultatsMedicaux] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPatient = { nom, prenom, dateNaissance, resultatsMedicaux };
    try {
      await axios.post('http://localhost:3000/api/patients', newPatient);
      alert('Patient ajouté avec succès');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Ajouter un Patient</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom" onChange={(e) => setNom(e.target.value)} />
        <input type="text" placeholder="Prénom" onChange={(e) => setPrenom(e.target.value)} />
        <input type="date" placeholder="Date de Naissance" onChange={(e) => setDateNaissance(e.target.value)} />
        <textarea placeholder="Résultats Médicaux" onChange={(e) => setResultatsMedicaux(e.target.value)} />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddPatient;
