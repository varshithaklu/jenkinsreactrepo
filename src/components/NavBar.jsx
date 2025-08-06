import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  InputBase,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem component={Link} to="/" onClick={handleMenuClose}>Dashboard</MenuItem>
          <MenuItem component={Link} to="/employee-form" onClick={handleMenuClose}>Add Employee</MenuItem>
          <MenuItem component={Link} to="/departments" onClick={handleMenuClose}>Departments</MenuItem>
          <MenuItem component={Link} to="/login" onClick={handleMenuClose}>Login</MenuItem>
        </Menu>

        <Typography variant="h6" sx={{ flexGrow: 1, ml: 2 }}>
          ERP System
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "white", borderRadius: 1, pl: 1 }}>
          <SearchIcon />
          <InputBase placeholder="Search…" sx={{ ml: 1 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;