import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const PatientCard = ({ patient }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{patient.name}</Typography>
        <Typography color="textSecondary">Age: {patient.age}</Typography>
        <Typography color="textSecondary">
          Condition: {patient.condition}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PatientCard;
