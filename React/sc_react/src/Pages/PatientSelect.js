import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PatientSelect() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('https://api.smarthealthit.org/v/r3/sandbox/patient');
        setPatients(response.data.entry.map(entry => entry.resource));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {patients.slice(0, 3).map(patient => (
        <div key={patient.id} style={{ padding: '1rem', textAlign: 'center', border: '1px solid gray' }}>
          <p>Name: {patient.name[0].given.join(' ')} {patient.name[0].family}</p>
          <p>ID: {patient.id}</p>
        </div>
      ))}
    </div>
  );
}

export default PatientSelect;
