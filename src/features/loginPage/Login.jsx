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
    <Box className={classes.container}>
      <Paper className={classes.loginBox} elevation={12}>
        <Grid className={classes.logo}>
          <Logo />
        </Grid>
        <form className={classes.root}>
          <Grid style={{ paddingBottom: "30px" }}>
            <Typography className={classes.text}>Bem-vindo</Typography>
          </Grid>
          <Grid container direction="row" justifyContent="center">
            <Grid item xs={8} style={{ paddingBottom: "15px" }}>
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
            <Grid item xs={8}>
              <PasswordInput
                userLoginData={userLogin}
                setUserPassword={setUserLogin}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={1}
            style={{ paddingTop: "30px" }}
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
              style={{ paddingTop: "10px" }}
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
  );
};

export default Login;
