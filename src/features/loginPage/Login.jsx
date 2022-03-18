import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
} from "@material-ui/core";
import useStyles from "./loginClasses";
import SectionTitle from "@components/SectionTitle";
import PasswordInput from "@components/PasswordInput";

const Login = () => {
  const classes = useStyles();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
    isPatient: "",
  });

  const handleRadio = (event) => {
    setUserLogin({ ...userLogin, isPatient: event.target.value === "patient" });
  };

  useEffect(() => {
    console.log(userLogin);
  }, [userLogin]);

  return (
    <>
      <Grid container className={classes.formsContainer}>
        <Grid item className={classes.line}>
          <form className={classes.root}>
            <SectionTitle title="Login:" fontSize={18} />
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              required
              fullWidth
              margin="dense"
              value={userLogin.email}
              onChange={(e) =>
                setUserLogin({ ...userLogin, email: e.target.value })
              }
            />
            <PasswordInput
              userLoginData={userLogin}
              setUserPassword={setUserLogin}
            />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RadioGroup row required onChange={handleRadio}>
                  <FormControlLabel
                    value="patient"
                    control={<Radio color="primary" required />}
                    label="Paciente"
                  />
                  <FormControlLabel
                    value="professional"
                    control={<Radio color="primary" required />}
                    label="Profissional"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={6}>
                <Button variant="contained" color="secondary" type="submit">
                  Conectar
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="primary">
                  Cadastrar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
