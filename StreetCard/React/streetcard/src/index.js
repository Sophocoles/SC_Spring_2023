import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from './components/FHIR/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import "react-toastify/dist/ReactToastify.css";
import Root from "./Root"; // Import Root from the correct path

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
