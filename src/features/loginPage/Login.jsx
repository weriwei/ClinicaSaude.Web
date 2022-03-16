import React from "react";
import useStyles from "./loginClasses";
import SectionTitle from "@components/SectionTitle";
import { Grid, TextField } from "@mui/material";
import PasswordInput from "@components/PasswordInput";

const Login = () => {
  const classes = useStyles();

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
              fullwidth
              margin="dense"
            />
            <PasswordInput />
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
