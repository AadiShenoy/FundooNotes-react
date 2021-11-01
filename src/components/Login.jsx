import React, { useState } from "react";
import RainbowText from "react-rainbow-text";
import { Link } from "react-router-dom";
import userService from "../service/userService";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import "../styles/form.scss";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    let errorFlag = false;
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
    if (email === "") {
      errorFlag = true;
      setEmailError(true);
    }
    if (password === "") {
      errorFlag = true;
      setPasswordError(true);
    }
    if (errorFlag) {
      console.log("Login Error");
    } else {
      let data = {
        email: email,
        password: password,
      };
      userService
        .login(data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form id="login-form" onSubmit={handleSubmit} autoComplete="off">
      <p>FlagState{JSON.stringify(passwordError)}</p>
      <Paper elevation={5} sx={{ p: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">
              <RainbowText lightness={0.5} saturation={1}>
                Fundoo Note
              </RainbowText>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Sign in</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p">to continue to Fundoo Notes</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Email eg:name@gmail.com"
              variant="outlined"
              type="email"
              error={emailError}
              helperText={emailError ? "Email cannot be empty" : ""}
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              label="password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
              helperText={passwordError ? "Password cannot be empty" : ""}
            />
          </Grid>
          <Grid item xs={12} align="left">
            <FormControlLabel
              control={<Checkbox />}
              label="Show password"
              onClick={handleShowPassword}
            />
          </Grid>
          <Grid item xs={6} align="left">
            <Button id="link-btn">Forgot password</Button>
          </Grid>
          <Grid item xs={6} align="right">
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
          <Grid item xs={6} align="left">
            <Button id="link-btn" component={Link} to="/">
              Create account
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default Login;
