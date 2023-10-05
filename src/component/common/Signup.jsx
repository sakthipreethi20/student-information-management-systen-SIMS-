import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div>
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            marginTop: 8,
          }}
        >
          <Grid container>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSLk6XeWUXzYlk30jofZ22k2AFxkuR8-8hJ6jSr-X2Kc-EaB40Ut__u6Qa_7aHaa5gyk&usqp=CAU)",
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 5,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  Sign Up
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <div className="row">
                    <div className="col-sm-2 d-flex align-items-sm-center">
                      <PersonIcon sx={{ fontSize: 40 }} />
                    </div>{" "}
                    <div className="col-sm-10">
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="yourname"
                        label="Your Name"
                        name="yourname"
                        autoComplete="yourname"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2 d-flex align-items-sm-center">
                      <EmailIcon sx={{ fontSize: 40 }} />
                    </div>{" "}
                    <div className="col-sm-10">
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2 d-flex align-items-sm-center">
                      <LockIcon sx={{ fontSize: 40 }} />
                    </div>

                    <div className="col-sm-10">
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2 d-flex align-items-sm-center">
                      <KeyIcon sx={{ fontSize: 40 }} />
                    </div>

                    <div className="col-sm-10">
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirmpassword"
                        label="Confirm Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                    </div>
                  </div>

                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                  Register
                  </Button>
                  <Grid container>                    
                    <Grid item>
                      <Link to={"/Login"}>Already have an account?Signin</Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
