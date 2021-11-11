import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import userService from "../service/userService";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import "../styles/form.scss";
const ResetPassWord = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { token } = useParams();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    let errorFlag = false;
    e.preventDefault();
    setPasswordError(false);
    if (password === "") {
      errorFlag = true;
      setPasswordError(true);
    }
    if (errorFlag) {
      console.log("Error");
    } else {
      let data = {
        password: password,
      };
      userService
        .resetPassword(data, token)
        .then((result) => {
          if (result.data.status === 200) {
            console.log(result.data);
            alert("password changed");
          } else {
            console.log(result.data);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <form id="resetpassword-form" autoComplete="off" onSubmit={handleSubmit}>
      <Paper elevation={5} sx={{ p: 4, height: "70vh" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">
              <span className="multicolortext">Fundoo Note</span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">
              Reset your Fundoo Note password
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p">Enter new Fundoo Note password</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              error={passwordError}
              helperText={passwordError ? "Password cannot be empty" : ""}
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
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
            <Button variant="contained" component={Link} to="/login">
              sign in
            </Button>
          </Grid>
          <Grid item xs={6} align="right">
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default ResetPassWord;
