import React from "react";
import { Container, Typography, Card, CardContent, Grid, Box } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import analyticsImage from "../assets/analytics.jpg";

const Dashboard = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        ERP Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ height: 140, backgroundColor: '#e3f2fd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PeopleIcon color="primary" sx={{ fontSize: 50 }} />
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6">Employees</Typography>
              <Typography variant="body2">Manage employee records</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ height: 140, backgroundColor: '#f3e5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BusinessIcon color="secondary" sx={{ fontSize: 50 }} />
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6">Departments</Typography>
              <Typography variant="body2">View and manage departments</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              component="img"
              sx={{ height: 140, width: '100%', objectFit: 'cover' }}
              src={analyticsImage}
              alt="ERP Analytics"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6">ERP Analytics</Typography>
              <Typography variant="body2">Visualize Performance metrics</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
