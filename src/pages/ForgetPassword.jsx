import React, { useState } from "react";
import userService from "../service/userService";
import { Link } from "react-router-dom";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  Alert,
} from "@mui/material";
import "../styles/form.scss";
const ForgetPassWord = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [fail, setFail] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    let errorFlag = false;
    e.preventDefault();
    setEmailError(false);
    if (email === "") {
      errorFlag = true;
      setEmailError(true);
    }
    if (errorFlag) {
      console.log("Error");
    } else {
      let data = {
        email: email,
      };
      userService
        .forgetPassword(data)
        .then((result) => {
          if (result.data.status === 200) {
            setSuccess(true);
          } else {
            setFail(true);
            console.log(result.data);
          }
        })
        .catch((e) => {
          setFail(true);
          console.log(e);
        });
    }
  };
  return (
    <form id="forgotpassword-form" autoComplete="off" onSubmit={handleSubmit}>
      <Paper elevation={5} sx={{ p: 4, height: "70vh" }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h5">
              <span className="multicolortext">Fundoo Note</span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Find your Fundoo Note password</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p">Enter your Fundoo Note email</Typography>
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
          <Grid item xs={6} align="left">
            <Button id="link-btn" component={Link} to="/login">
              Back
            </Button>
          </Grid>
          <Grid item xs={6} align="right">
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{paddingTop:"15px"}}>
          {success && (
            <Alert
              severity="success"
              onClose={() => {
                setSuccess(false);
              }}
            >
              Password reset link sent to your email
            </Alert>
          )}
          {fail && (
            <Alert
              severity="error"
              onClose={() => {
                setFail(false);
              }}
            >
              Invalid Email!!
            </Alert>
          )}
        </Grid>
      </Paper>
    </form>
  );
};

export default ForgetPassWord;
