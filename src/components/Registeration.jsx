import React, { useState } from "react";
import registerImage from "../assets/account.svg";
import RainbowText from "react-rainbow-text";
import { Link } from "react-router-dom";
import {
  validPassword,
  validEmail,
  validFirstName,
  validLastName,
} from "./formValidation";
import {
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
  Paper,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import "../styles/registeration.scss";

const Registeration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setPasswordConfirmError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setPasswordConfirmError(false);
    if (!validFirstName.test(firstName)) setFirstNameError(true);
    if (!validLastName.test(lastName)) setLastNameError(true);
    if (!validEmail.test(email)) setEmailError(true);
    if (!validPassword.test(password)) setPasswordError(true);
    if (password !== confirmPassword) {
      setPasswordConfirmError(true);
    }
  };

  return (
    <form id="registeration-form" onSubmit={handleSubmit} autoComplete="off">
      <Paper elevation={5} sx={{ p: 2 }}>
        <Grid container>
          <Grid item container spacing={1} xs={8}>
            <Grid item xs={12}>
              <Typography variant="h4" align="left">
                <RainbowText lightness={0.5} saturation={1}>
                  Fundoo Note
                </RainbowText>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="left">
                Create your Fundoo Account
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="first-name"
                label="First Name"
                variant="outlined"
                fullWidth
                error={firstNameError}
                helperText={firstNameError ? "Invalid first name" : ""}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="last-name"
                label="Last Name"
                variant="outlined"
                fullWidth
                error={lastNameError}
                helperText={lastNameError ? "Invalid last name" : ""}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                error={emailError}
                helperText={
                  emailError
                    ? "Invalid email"
                    : "You can use letters,numbers & periods"
                }
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">@gmail.com</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="password"
                label="password"
                variant="outlined"
                fullWidth
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                error={passwordError}
                helperText={
                  passwordError
                    ? "Invalid password"
                    : "Use 8 or more characters with a mix of letters, numbers & symbols"
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="confirm"
                label="confirm"
                variant="outlined"
                fullWidth
                type={showPassword ? "text" : "password"}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={confirmPasswordError}
                helperText={confirmPasswordError ? "Password doesnt match" : ""}
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
              <Button id="sign-in-button" component={Link} to="/login">
                Sign in instead
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
          <Grid item container xs={4}>
            <img alt=" " src={registerImage} />
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};
export default Registeration;
