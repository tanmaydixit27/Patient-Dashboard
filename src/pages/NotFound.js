import React from "react";
import { Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container>
      <Typography variant="h3" color="error">
        404 - Page Not Found
      </Typography>
    </Container>
  );
};

export default NotFound;
