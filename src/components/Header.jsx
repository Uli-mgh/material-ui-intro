import React from "react";

import { Typography, AppBar, Toolbar } from "@mui/material";

import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <PhotoCameraIcon />
        <Typography variant="h6">Photo Album </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
