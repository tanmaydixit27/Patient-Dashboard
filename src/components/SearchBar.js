import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { PatientContext } from "../context/PatientContext";

const SearchBar = () => {
  const { setFilter } = useContext(PatientContext);

  const handleSearch = (e) => {
    setFilter(e.target.value.trim()); // Trim spaces to avoid unnecessary filtering
  };

  return (
    <TextField
      fullWidth
      label="Search Patients"
      variant="outlined"
      onChange={handleSearch}
      autoComplete="off"
    />
  );
};

export default SearchBar;
