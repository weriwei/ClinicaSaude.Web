import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import useStyles from "./dependentCardClasses";
import Moment from "moment";
import { getGenderLabel } from "@helper/genderHelper";

const DependentCard = ({ dependent }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Paper className={classes.Box} elevation={12}>
        <Grid
          container
          direction="row"
          alignContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Grid container direction="column">
              <Grid item xs={2}>
                <Typography className={classes.label}>Nome: </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography className={classes.userText}>
                  {dependent.nome}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Grid container direction="column">
              <Grid item xs={5}>
                <Typography className={classes.label}>
                  Data de nascimento:{" "}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.userText}>
                  {Moment(dependent.data_Nascimento).format("DD/MM/YYYY")}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={2}>
            <Grid container direction="column">
              <Grid item xs={4}>
                <Typography className={classes.label}>Gênero: </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography className={classes.userText}>
                  {getGenderLabel(dependent.genero)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default DependentCard;
