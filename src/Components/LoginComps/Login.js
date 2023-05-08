import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Checkbox,
  FormControlLabel,
  CssBaseline,
  Box,
} from "@mui/material";

import { Lock } from "@mui/icons-material";
import loginBackground from "../../Assets/image/login.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const formSubmitHanlder = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <Grid
      container
      component={Paper}
      elevation={2}
      sx={{
        maxWidth: {
          sm: "70vw",
          md: "60vw",
          lg: "80vw",
        },
        margin: "80px auto",
        height: "80vh",
        justifyContent: "center",
      }}
    >
      <CssBaseline />
      <Grid
        item
        lg={7}
        sx={{
          backgroundImage: `url(${loginBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <Grid item lg={5} sx={{ height: "100%" }}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <Lock />
          </Avatar>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            LOGIN
          </Typography>
          <Typography variant="span" sx={{ color: "#999" }}>
            Welcome back to Yolo Farm
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={formSubmitHanlder}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
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
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Link
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                underline="none"
                href="#"
                variant="body2"
              >
                Forgot password?
              </Link>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, padding: 1 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
