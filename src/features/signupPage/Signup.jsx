import React, { useState, useContext } from "react";
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
import { Context } from "@context/userContext";
import EmailInput from "@components/EmailInput";
import PasswordInput from "@components/PasswordInput";
import CpfInput from "@components/CpfInput";
import DateInput from "@components/DateInput";
import GenderSelectInput from "@components/GenderSelectInput";
import GenericModal from "@components/genericModal/GenericModal";
import { requestSignup } from "@hooks/useSignup";
import {
  CEP_LENGTH,
  COMPLEMENT_MAX_LENGTH,
  NAME_MAX_LENGTH,
  STREET_MAX_LENGTH,
  NUMBER_MAX_LENGTH,
} from "@constants/constants";
import { isOnlyDigits } from "@helper/inputHelper";

const Signup = ({ login, setLogin }) => {
  const { setAuthenticated } = useContext(Context);
  const classes = useStyles();
  const [modalErrorSignup, setModalErrorSignup] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    documentNumber: "",
    gender: "",
    birthday: "1999-11-25T03:00:00.000Z",
    street: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    zipcode: "",
  });

  const handleSignup = async (event) => {
    event.preventDefault();
    const response = await requestSignup(userData);
    if (response.status === 201) setAuthenticated(true);
    else setModalErrorSignup(!modalErrorSignup);
  };

  return (
    <Box className={classes.container}>
      <Paper className={classes.signupBox} elevation={12}>
        <Grid className={classes.logo}>
          <Logo />
        </Grid>
        <form className={classes.root} onSubmit={handleSignup}>
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
            <Grid container item xs={9}>
              <Grid item xs={10} style={{ paddingRight: "10px" }}>
                <TextField
                  label="Rua"
                  variant="standard"
                  type="text"
                  required
                  inputProps={{ maxLength: STREET_MAX_LENGTH }}
                  fullWidth
                  onChange={(e) =>
                    setUserData({ ...userData, street: e.target.value })
                  }
                  value={userData.street}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="Número"
                  variant="standard"
                  type="text"
                  required
                  inputProps={{
                    maxLength: NUMBER_MAX_LENGTH,
                  }}
                  fullWidth
                  onChange={(e) =>
                    isOnlyDigits(e.target.value)
                      ? setUserData({ ...userData, number: e.target.value })
                      : setUserData({ ...userData, number: "" })
                  }
                  value={userData.number}
                />
              </Grid>
            </Grid>
            <Grid container item xs={9}>
              <Grid item xs={6} style={{ paddingRight: "10px" }}>
                <TextField
                  label="Complemento"
                  variant="standard"
                  type="text"
                  inputProps={{ maxLength: COMPLEMENT_MAX_LENGTH }}
                  fullWidth
                  required
                  onChange={(e) =>
                    setUserData({ ...userData, complement: e.target.value })
                  }
                  value={userData.complement}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Bairro"
                  variant="standard"
                  type="text"
                  required
                  inputProps={{ maxLength: STREET_MAX_LENGTH }}
                  fullWidth
                  onChange={(e) =>
                    setUserData({ ...userData, district: e.target.value })
                  }
                  value={userData.district}
                />
              </Grid>
            </Grid>
            <Grid container item xs={9}>
              <Grid item xs={6} style={{ paddingRight: "10px" }}>
                <TextField
                  label="Cidade"
                  variant="standard"
                  type="text"
                  required
                  inputProps={{ maxLength: STREET_MAX_LENGTH }}
                  fullWidth
                  onChange={(e) =>
                    setUserData({ ...userData, city: e.target.value })
                  }
                  value={userData.city}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Cep"
                  variant="standard"
                  type="text"
                  required
                  inputProps={{ maxLength: CEP_LENGTH }}
                  fullWidth
                  onChange={(e) =>
                    isOnlyDigits(e.target.value)
                      ? setUserData({ ...userData, zipcode: e.target.value })
                      : setUserData({ ...userData, zipcode: "" })
                  }
                  value={userData.zipcode}
                />
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
                  disabled={
                    !(
                      userData.name &&
                      userData.birthday &&
                      userData.documentNumber &&
                      userData.email &&
                      userData.gender &&
                      userData.password &&
                      userData.zipcode.length === CEP_LENGTH &&
                      userData.street &&
                      userData.city &&
                      userData.number &&
                      userData.district
                    )
                  }
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
            <GenericModal
              open={modalErrorSignup}
              onClose={setModalErrorSignup}
              title="Erro ao tentar efetuar o cadastro"
              type="error"
              buttons={[
                {
                  onClick: () => setModalErrorSignup(false),
                  variant: "contained",
                  color: "secondary",
                  text: "Tentar Novamente",
                  id: 0,
                },
              ]}
            />
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Signup;
