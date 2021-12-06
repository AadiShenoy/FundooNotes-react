import React, { useState } from "react";
import registerImage from "../assets/account.svg";
import { Link, Redirect } from "react-router-dom";
import userService from "../service/userService";

import {
  validPassword,
  validEmail,
  validFirstName,
  validLastName,
} from "../config/formValidation";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  FormControlLabel,
  Checkbox,
  Alert,
} from "@mui/material";
import "../styles/form.scss";

const Registeration = () => {
  const initialUserState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [user, setUser] = useState(initialUserState);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setPasswordConfirmError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    let errorFlag = false;
    e.preventDefault();
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setPasswordConfirmError(false);
    if (!validFirstName.test(user.firstName)) {
      errorFlag = true;
      setFirstNameError(true);
    }
    if (!validLastName.test(user.lastName)) {
      errorFlag = true;
      setLastNameError(true);
    }
    if (!validEmail.test(user.email)) {
      errorFlag = true;
      setEmailError(true);
    }
    if (!validPassword.test(user.password)) {
      errorFlag = true;
      setPasswordError(true);
    }
    if (user.password !== user.confirmPassword) {
      errorFlag = true;
      setPasswordConfirmError(true);
    }

    if (errorFlag) {
      console.log("Enter the correct details");
    } else {
      let data = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      };
      userService
        .register(data)
        .then((response) => {
          if (response.data.status === 200) {
            setSuccess(true);
            console.log("Registered successfully");
            console.log(response.data);
          } else {
            setFail(true);
            console.log("Registeration failed");
            console.log(response.data);
          }
        })
        .catch((e) => {
          setFail(true);
          console.log("Registeration failed");
          console.log(e);
        });
    }
  };

  return (
    <form id="registeration-form" onSubmit={handleSubmit} autoComplete="off">
      {/* <h4>{process.env.NODE_ENV}</h4> */}
      <Paper elevation={5} sx={{ p: 2 }}>
        <Grid container>
          <Grid item container spacing={1} xs={8}>
            <Grid item xs={12}>
              <Typography variant="h5" align="left">
                <span className="multicolortext">Fundoo Note</span>
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
                name="firstName"
                value={user.firstName}
                onChange={handleInputChange}
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
                name="lastName"
                value={user.lastName}
                onChange={handleInputChange}
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
                    : "You can use letters,numbers & periods eg:name@gmail.com"
                }
                fullWidth
                name="email"
                value={user.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="password"
                label="password"
                variant="outlined"
                fullWidth
                type={showPassword ? "text" : "password"}
                name="password"
                value={user.password}
                onChange={handleInputChange}
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
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleInputChange}
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
              <Button id="sign-in-btn" component={Link} to="/login">
                Sign in instead
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" type="submit" id="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
          <Grid item container xs={4}>
            <img alt=" " src={registerImage} />
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ paddingTop: "15px" }}>
          {fail && (
            <Alert
              severity="error"
              onClose={() => {
                setFail(false);
              }}
            >
              Registeration Failed!!
            </Alert>
          )}
        </Grid>
      </Paper>
      {success ? <Redirect to="/login" /> : null}
    </form>
  );
};
export default Registeration;
