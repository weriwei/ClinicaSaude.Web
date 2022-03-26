import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import Logo from "@components/Logo";
import useStyles from "./signupClasses";
import { NAME_MAX_LENGTH } from "@constants/constants";
import EmailInput from "@components/EmailInput";
import PasswordInput from "@components/PasswordInput";
import CpfInput from "@components/CpfInput";
import DateInput from "@components/DateInput";
import GenderSelectInput from "@components/GenderSelectInput";
import { requestSignup } from "@hooks/useSignup";

const Signup = ({ login, setLogin }) => {
  const classes = useStyles();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    documentNumber: "",
    gender: "",
    birthday: "01/01/1990",
  });

  const handleSignup = async (event) => {
    event.preventDefault();
    requestSignup(userData);
  };

  return (
    <Box className={classes.container}>
      <Paper className={classes.signupBox} elevation={12}>
        <Grid className={classes.logo}>
          <Logo />
        </Grid>
        <form className={classes.root}>
          <Grid style={{ paddingBottom: "20px" }}>
            <Typography className={classes.text}>Cadastro</Typography>
          </Grid>
          <Grid container direction="row" justifyContent="center">
            <Grid item xs={9}>
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
            <Grid item xs={9}>
              <EmailInput userLoginData={userData} setUserLogin={setUserData} />
            </Grid>
            <Grid item xs={9}>
              <PasswordInput
                userLoginData={userData}
                setUserPassword={setUserData}
              />
            </Grid>
            <Grid item xs={9}>
              <CpfInput userData={userData} setUserData={setUserData} />
            </Grid>
            <Grid container item xs={9}>
              <Grid item xs={6} style={{ paddingRight: "12px" }}>
                <GenderSelectInput
                  userData={userData}
                  setUserData={setUserData}
                />
              </Grid>
              <Grid item xs={6}>
                <DateInput userData={userData} setUserData={setUserData} />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              style={{ paddingTop: "30px" }}
              align="center"
            >
              <Grid item xs={6} style={{ paddingLeft: "50px" }}>
                <Button
                  variant="contained"
                  className={classes.backHomeButton}
                  onClick={() => setLogin(!login)}
                >
                  Voltar
                </Button>
              </Grid>
              <Grid item xs={6} style={{ paddingRight: "50px" }}>
                <Button
                  variant="contained"
                  type="submit"
                  className={classes.signupButton}
                  onClick={handleSignup}
                >
                  Cadastrar
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              style={{ paddingTop: "20px" }}
              justifyContent="center"
              direction="row"
              alignItems="center"
            >
              <Grid item xs={6} style={{ paddingLeft: "13px" }}>
                <Typography className={classes.signUptext}>
                  *Ao clicar em cadastrar você aceita os
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="text" className={classes.signUpTextButton}>
                  termos de uso
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Signup;
