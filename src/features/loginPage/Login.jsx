import React, { useState, useContext } from "react";
import { Grid, Paper, Button, Box, Typography } from "@material-ui/core";
import useStyles from "./loginClasses";
import EmailInput from "@components/EmailInput";
import PasswordInput from "@components/PasswordInput";
import Logo from "@components/Logo";
import { requestLogin } from "@hooks/useLogin";
import GenericModal from "@components/genericModal/GenericModal";
import { Context } from "@context/userContext";
import { PasswordLength } from "../../shared/constants/constants";

const Login = ({ login, setLogin }) => {
  const { handleAuthenticate, setAuthenticated } = useContext(Context);
  const classes = useStyles();
  const [modalErrorLogin, setModalErrorLogin] = useState(false);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await requestLogin(userLogin);
    if (response.status === 200) {
      handleAuthenticate(response);
      setAuthenticated(true);
    } else setModalErrorLogin(true);
  };

  const handleTryAgain = () => {
    setModalErrorLogin(false);
  };

  const modalButtons = [
    {
      onClick: handleTryAgain,
      variant: "contained",
      color: "secondary",
      text: "Tentar Novamente",
      id: 0,
    },
  ];

  return (
    <Box className={classes.container}>
      <Paper className={classes.loginBox} elevation={12}>
        <Grid className={classes.logo}>
          <Logo height={100} />
        </Grid>
        <form className={classes.root}>
          <Grid style={{ paddingBottom: "30px" }}>
            <Typography className={classes.text}>Bem-vindo</Typography>
          </Grid>
          <Grid container direction="row" justifyContent="center">
            <Grid item xs={8} style={{ paddingBottom: "15px" }}>
              <EmailInput
                userLoginData={userLogin}
                setUserLogin={setUserLogin}
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
                onClick={handleLogin}
                disabled={
                  !(
                    userLogin.email &&
                    userLogin.password.length >= PasswordLength.min &&
                    userLogin.password.length <= PasswordLength.max
                  )
                }
              >
                Conectar
              </Button>
            </Grid>
            <Grid
              container
              style={{ paddingTop: "10px" }}
              justifyContent="center"
              direction="row"
              alignItems="center"
            >
              <Grid item xs={4}>
                <Typography className={classes.signUptext}>
                  *Não possui cadastro?{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  className={classes.signUpButton}
                  onClick={() => setLogin(!login)}
                >
                  Cadastre aqui
                </Button>
              </Grid>
              <GenericModal
                open={modalErrorLogin}
                onClose={setModalErrorLogin}
                title="Erro ao tentar efetuar o login"
                type="error"
                buttons={modalButtons}
              />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
