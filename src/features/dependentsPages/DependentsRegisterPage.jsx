import React, { useState, useContext } from "react";
import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import CpfInput from "@components/CpfInput";
import DateInput from "@components/DateInput";
import { Context } from "@context/userContext";
import GenderSelectInput from "@components/GenderSelectInput";
import { NAME_MAX_LENGTH, dependentInitialState } from "@constants/constants";
import { routes } from "@constants/routes";
import useStyles from "./dependentsRegisterPageClasses";
import { handleRegister } from "@hooks/useDependents";
import GenericModal from "@components/genericModal/GenericModal";
import { useHistory } from "react-router";

const DependentsRegisterPage = () => {
  const { getUserId } = useContext(Context);
  const history = useHistory();
  const classes = useStyles();

  const [userData, setUserData] = useState(dependentInitialState);
  const [showModal, setShowModal] = useState(false);

  const goHome = () => history.push(routes.home.path);
  const goView = () => history.push(routes.dependents.view);

  const handleConcludeRegister = () => {
    setUserData(dependentInitialState);
    setShowModal(false);
    goView();
  };

  const handleDependentRegister = async (event) => {
    event.preventDefault();
    const response = await handleRegister(userData, getUserId());
    event.target.reset();
    if (response.status === 201) {
      setShowModal(true);
    } else setShowModal(false);
  };

  return (
    <Box className={classes.container}>
      <Paper className={classes.signupBox} elevation={12}>
        <form className={classes.root} onSubmit={handleDependentRegister}>
          <Grid style={{ paddingBottom: "40px" }}>
            <Typography className={classes.text}>
              Cadastro de dependente
            </Typography>
          </Grid>
          <Grid container direction="row" justifyContent="center" spacing={3}>
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
              <Grid
                item
                xs={6}
                style={{ paddingLeft: "50px", paddingTop: "20px" }}
              >
                <Button
                  variant="contained"
                  className={classes.backHomeButton}
                  href={routes.home.path}
                >
                  Voltar
                </Button>
              </Grid>
              <Grid
                item
                xs={6}
                style={{ paddingRight: "50px", paddingTop: "20px" }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  className={classes.signupButton}
                  disabled={
                    !(
                      userData.name &&
                      userData.birthday &&
                      userData.documentNumber &&
                      userData.gender
                    )
                  }
                >
                  Cadastrar
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              style={{ paddingTop: "30px" }}
              justifyContent="center"
              direction="row"
              alignItems="center"
            >
              <GenericModal
                open={showModal}
                onClose={setShowModal}
                title="Cadastro realizado!"
                type="success"
                buttons={[
                  {
                    onClick: goHome,
                    variant: "contained",
                    color: "primary",
                    text: "Voltar",
                    id: 0,
                  },
                  {
                    onClick: handleConcludeRegister,
                    variant: "contained",
                    color: "primary",
                    text: "Visualizar",
                    id: 1,
                  },
                ]}
              />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default DependentsRegisterPage;
