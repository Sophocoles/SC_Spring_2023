import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import reportWebVitals from './components/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import "react-toastify/dist/ReactToastify.css";
import Root from "./Root"; // Import Root from the correct path

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Root>
    <App />
  </Root>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
