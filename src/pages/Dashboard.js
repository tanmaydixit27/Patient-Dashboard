import React, { useContext } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { PatientContext } from "../context/PatientContext";
import SearchBar from "../components/SearchBar";  
import FilterMenu from "../components/FilterMenu";  
import PatientCard from "../components/PatientCard";  
import Loader from "../components/Loader";  

const Dashboard = () => {
  const { filteredPatients, loading } = useContext(PatientContext);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Patient Dashboard
      </Typography>
      <SearchBar />
      <FilterMenu />
      {loading ? (
        <Loader />
      ) : filteredPatients.length === 0 ? (
        <Typography variant="h6" align="center" color="error">
          No patients found.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {filteredPatients.map((patient) => (
            <Grid item xs={12} sm={6} md={4} key={patient.id}>
              <PatientCard patient={patient} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Dashboard;
