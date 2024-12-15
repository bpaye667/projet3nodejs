// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PatientList from './pages/PatientList';
import AppointmentList from './pages/AppointmentList';
import AddPatient from './pages/AddPatient';
import AddAppointment from './pages/AddAppointment';

function App() {
  return (
    <Router>
      <div>
        <h1>Gestion des Rendez-vous et Dossiers des Patients</h1>
        <Switch>
          <Route path="/patients" component={PatientList} />
          <Route path="/appointments" component={AppointmentList} />
          <Route path="/add-patient" component={AddPatient} />
          <Route path="/add-appointment" component={AddAppointment} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
