import React, { useState } from "react";
import { Container, Paper, TextField, Typography, Button, Box } from "@mui/material";

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login successful for ${loginData.username}`);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }} elevation={3}>
        <Typography variant="h5" gutterBottom>Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Username" name="username" value={loginData.username} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Password" name="password" type="password" value={loginData.password} onChange={handleChange} margin="normal" required />
          <Box mt={2}>
            <Button variant="contained" type="submit">Login</Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;