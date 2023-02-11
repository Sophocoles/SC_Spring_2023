import React from 'react';
import { FhirResource, fhirVersions, fhirIcons } from 'fhir-react';

function MyComponent() {
  const fhirResourceAsJsonString = '{"resourceType": "Patient", "id": "example", "name": [{"family": "Doe", "given": ["John"]}], "gender": "male"}';
  const fhirResource = JSON.parse(fhirResourceAsJsonString);

  console.log(fhirResource, "peepee");

  return (
    <div>
      <h1>My Component</h1>
      <FhirResource
        fhirResource={fhirResource}
        fhirVersion={fhirVersions.R4}
        fhirIcons={fhirIcons}
        withCarinBBProfile
      />
    </div>
  );
}

export default MyComponent;
