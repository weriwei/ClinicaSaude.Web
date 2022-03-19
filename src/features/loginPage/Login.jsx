import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Box,
  Typography,
} from "@material-ui/core";
import useStyles from "./loginClasses";
import PasswordInput from "@components/PasswordInput";
import Logo from "@components/Logo";
import { baseStyle } from "@constants/baseStyles";

const Login = () => {
  const classes = useStyles();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(userLogin);
  }, [userLogin]);

  return (
    <>
      <Box className={classes.container}>
        <Paper className={classes.loginBox} elevation={12}>
          <Grid className={classes.logo}>
            <Logo />
          </Grid>
          <form className={classes.root}>
            <Grid style={{ paddingBottom: "60px" }}>
              <Typography className={classes.text}>Bem-vindo</Typography>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={12} style={{ paddingBottom: "50px" }}>
                <TextField
                  label="E-mail"
                  variant="standard"
                  type="email"
                  required
                  fullWidth
                  value={userLogin.email}
                  onChange={(e) =>
                    setUserLogin({ ...userLogin, email: e.target.value })
                  }
                  InputLabelProps={{
                    style: baseStyle.style,
                  }}
                />
              </Grid>
              <PasswordInput
                userLoginData={userLogin}
                setUserPassword={setUserLogin}
              />
            </Grid>
            <Grid
              container
              direction="row"
              spacing={1}
              style={{ paddingTop: "50px" }}
              align="center"
            >
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  className={classes.loginButton}
                >
                  Conectar
                </Button>
              </Grid>
              <Grid
                container
                style={{ paddingTop: "12px" }}
                justifyContent="center"
                direction="row"
              >
                <Grid item>
                  <Button variant="text" className={classes.signUpButton}>
                    * Clique aqui para se cadastrar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default Login;
