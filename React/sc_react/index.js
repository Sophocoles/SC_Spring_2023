import React from 'react';
import ReactDOM from 'react-dom';
import { FhirProvider } from 'fhir-react';

const App = () => {
    return (
        <FhirProvider>
            <h1>FHIR Provider</h1>
        </FhirProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
