import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./styles/theme";
import { PatientProvider } from "./context/PatientContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PatientProvider>
          <App />
        </PatientProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
