import React, { useContext } from "react";
import { Select, MenuItem } from "@mui/material";
import { PatientContext } from "../context/PatientContext";

const FilterMenu = () => {
  const { setFilter } = useContext(PatientContext);

  return (
    <Select onChange={(e) => setFilter(e.target.value)} defaultValue="">
      <MenuItem value="">All</MenuItem>
      <MenuItem value="diabetes">Diabetes</MenuItem>
      <MenuItem value="hypertension">Hypertension</MenuItem>
    </Select>
  );
};

export default FilterMenu;
