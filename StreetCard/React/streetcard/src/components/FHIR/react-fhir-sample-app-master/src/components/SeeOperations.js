import React, { useState } from "react";
import { FhirClientContext } from "../FhirClientContext";
import "./EncounterTable.css";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import ApptResources from "./Resources/ApptResources";

export default function AppointmentEncounterTable(props) {
  const { client } = React.useContext(FhirClientContext);
  const [appointments, setAppointments] = useState([]);
  const [encounters, setEncounters] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const resourceList = [];

  const navigate = useNavigate();

  const toComponentB=()=>{
    navigate('/apptResources',{state:{id:1,name:'sabaoon',appointments:resourceList}});
      }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (startDate && endDate) {
      const headers = {
        Accept: "application/fhir+json"
      };

      const apptQueryParams = `patient=${client.getPatientId()}&date=ge${startDate}&date=le${endDate}`;
      const encounterQueryParams = `patient=${client.getPatientId()}&start=ge${startDate}&end=le${endDate}`;

      Promise.all([        client.request(`Appointment?${apptQueryParams}`, { headers }),        client.request(`Encounter?${encounterQueryParams}`, { headers })      ])
        .then(([appointmentData, encounterData]) => {
          const appointmentResources = appointmentData?.entry?.map((entry) => entry.resource);
          const encounterResources = encounterData?.entry?.map((entry) => entry.resource);

          const appointmentCounts = {};
          const encounterCounts = {};

          appointmentResources.forEach((resource) => {
            const resourceType = resource.resourceType;
            if (!appointmentCounts[resourceType]) {
              appointmentCounts[resourceType] = 1;
            } else {
              appointmentCounts[resourceType]++;
            }
          });

          encounterResources.forEach((resource) => {
            const resourceType = resource.resourceType;
            if (!encounterCounts[resourceType]) {
              encounterCounts[resourceType] = 1;
            } else {
              encounterCounts[resourceType]++;
            }

            resourceList[1] = appointmentResources.slice(0)
            console.log("appointments", resourceList[1])
          });

          

          setAppointments(appointmentCounts);
          setEncounters(encounterCounts);

          

          
        })
        .catch((error) => {
          console.error(error, "Inside error");
        });
    }
    
  };

  // First component i.e App




	

	const testObj = "ssss"


  return (

    

    <div className="table-container">


	


      <form onSubmit={handleSubmit}>
        <label>
          Start Date:
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </label>
        <label>
          End Date:
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Appointment Resources</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(appointments).map((resourceType) => (
              <tr key={resourceType}>
                <td>
                    <><div> <a onClick={()=>{toComponentB()}}>{resourceType}</a></div></>

                </td>
                <td>{appointments[resourceType]}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <div>
        <h2>Encounter Resources</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(encounters).map((resourceType) => (
              <tr key={resourceType}>
                <td>{resourceType}</td>
                <td>{encounters[resourceType]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
            }  