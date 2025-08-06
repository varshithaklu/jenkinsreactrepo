import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  Paper,
} from "@mui/material";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", department: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>Employee Registration</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Department" name="department" value={formData.department} onChange={handleChange} margin="normal" required />
          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit">Submit</Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default EmployeeForm;