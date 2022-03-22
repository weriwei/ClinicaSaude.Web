import React from "react";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import EmailInput from "@components/EmailInput";
import PasswordInput from "@components/PasswordInput";
import baseStyles from "@constants/baseStyles";
import Logo from "@components/Logo";

const Signup = ({ login, setLogin }) => {
  const classes = baseStyles();
  return (
    <Box className={classes.container}>
      <Paper className={classes.loginBox} elevation={12}>
        <Grid className={classes.logo}>
          <Logo />
        </Grid>
        <form className={classes.root}>
          <Grid style={{ paddingBottom: "30px" }}>
            <Typography className={classes.text}>Cadastro</Typography>
          </Grid>
          <Grid container direction="row" justifyContent="center">
            <Grid item xs={8} style={{ paddingBottom: "15px" }}>
              <EmailInput userLoginData={login} setUserLogin={setLogin} />
            </Grid>
            <Grid item xs={8}>
              <PasswordInput userLoginData={login} setUserPassword={setLogin} />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Signup;
