import React from "react";
import { Container, Typography } from "@mui/material";

const DepartmentPage = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5">Departments</Typography>
      <Typography variant="body1" mt={2}>You can manage and list departments here.</Typography>
    </Container>
  );
};

export default DepartmentPage;