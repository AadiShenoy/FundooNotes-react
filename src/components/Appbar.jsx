import React from "react";
import { styled } from "@mui/material/styles";
import keepImage from "../assets/google_keep.png";
import {
  Toolbar,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  spacing: 2,
}));

const Appbar = ({ handleDrawerOpen }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: "36px",
          }}
        >
          <MenuIcon />
        </IconButton>
        <img src={keepImage} alt="" style={{ width: "40px", height: "40px" }} />
        <Typography variant="h6" noWrap component="div">
          Fundoo Note
        </Typography>
        <TextField
          placeholder="Search…"
          style={{ width: "60%", margin: "auto" }}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: "white" }} />
              </InputAdornment>
            ),
            style: { color: "white" },
          }}
        />
        <AccountCircleIcon fontSize="large" />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
