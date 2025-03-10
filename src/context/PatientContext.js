import React, { createContext, useState, useEffect } from "react";
import { fetchPatients } from "../services/api";

export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchPatients().then((data) => {
      setPatients(data);
      setFilteredPatients(data); // Set initial filtered state
    });
  }, []);

  useEffect(() => {
    if (!filter) {
      setFilteredPatients(patients);
    } else {
      setFilteredPatients(
        patients.filter((p) =>
          p.name.toLowerCase().includes(filter.toLowerCase())
        )
      );
    }
  }, [filter, patients]);

  return (
    <PatientContext.Provider value={{ filteredPatients, setFilter }}>
      {children}
    </PatientContext.Provider>
  );
};
