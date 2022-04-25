import React, { useContext } from "react";
import { Context } from "@context/userContext";
import { AppBar, Button, Grid, Toolbar } from "@material-ui/core";
import useStyles from "./navBarClasses";
import Logo from "@components/Logo";
import { routes } from "@constants/routes";
import DependentsMenuItem from "@components/dependentsMenu/DependentsMenuItem";
import { useHistory } from "react-router";

const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const { logout } = useContext(Context);

  const goHome = () => history.push(routes.home.path);

  return (
    <AppBar className={classes.appBar}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Toolbar>
          <Grid item className={classes.container}>
            <Button onClick={goHome}>
              <Logo />
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button fullWidth size="large" className={classes.buttons}>
              Consultas
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button fullWidth size="large" className={classes.buttons}>
              Exames
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button fullWidth size="large" className={classes.buttons}>
              Pagamentos
            </Button>
          </Grid>

          <Grid item xs={4}>
            <DependentsMenuItem />
          </Grid>
        </Toolbar>
      </Grid>
      <Grid container justifyContent="flex-end" alignItems="center">
        <Grid item xs={2}>
          <Button
            fullWidth
            size="large"
            className={classes.buttons}
            onClick={logout}
          >
            Sair
          </Button>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
