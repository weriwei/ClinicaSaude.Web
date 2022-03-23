import React, { useState } from "react";
import { Box, Grid, Paper, TextField, Typography } from "@material-ui/core";
import EmailInput from "@components/EmailInput";
import PasswordInput from "@components/PasswordInput";
import baseStyles from "@constants/baseStyles";
import Logo from "@components/Logo";
import { NAME_MAX_LENGTH } from "@constants/constants";
import CpfInput from "@components/CpfInput";
import DateInput from "@components/DateInput";

const Signup = ({ login, setLogin }) => {
  const classes = baseStyles();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    documentNumber: "",
    gender: "",
    birthday: "",
  });

  return (
    <Box className={classes.container}>
      <Paper className={classes.loginBox} elevation={12}>
        <Grid className={classes.logo}>
          <Logo />
        </Grid>
        <form className={classes.root}>
          <Grid style={{ paddingBottom: "20px" }}>
            <Typography className={classes.text}>Cadastro</Typography>
          </Grid>
          <Grid container direction="row" justifyContent="center">
            <Grid item xs={8}>
              <TextField
                label="Nome Completo"
                variant="standard"
                type="text"
                required
                inputProps={{ maxLength: NAME_MAX_LENGTH }}
                fullWidth
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                value={userData.name}
              />
            </Grid>
            <Grid item xs={8}>
              <EmailInput userLoginData={userData} setUserLogin={setUserData} />
            </Grid>
            <Grid item xs={8}>
              <PasswordInput
                userLoginData={userData}
                setUserPassword={setUserData}
              />
            </Grid>
            <Grid item xs={8}>
              <CpfInput userData={userData} setUserData={setUserData} />
            </Grid>
            <Grid item xs={8}>
              <DateInput userData={userData} setUserData={setUserData} />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Signup;
