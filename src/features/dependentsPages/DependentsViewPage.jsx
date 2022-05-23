import React, { useEffect, useContext, useState } from "react";
import { Context } from "@context/userContext";
import { Grid, Paper, Typography } from "@material-ui/core";
import DependentCard from "@components/dependentCard/DependentCard";
import useStyles from "./DependentsViewPageClasses";
import { getDependents } from "@hooks/useDependents";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const DependentsViewPage = () => {
  const { getUserId } = useContext(Context);
  const classes = useStyles();

  const [dependents, setDependents] = useState();

  useEffect(() => {
    const getDependentsData = async () => {
      const response = await getDependents(getUserId());
      if (response) {
        Promise.apply(setDependents(response.data));
      }
    };
    getDependentsData();
  }, []);

  return (
    <Grid container className={classes.container}>
      <Paper className={classes.Box} elevation={12}>
        <Grid container item className={classes.Title} spacing={10}>
          <Paper className={classes.BoxTitle}>
            <Typography className={classes.text}>Dependentes </Typography>
          </Paper>
        </Grid>
        <Grid container direction="row">
          <List
            style={{
              maxHeight: "80vh",
              overflow: "auto",
              width: "100%",
              height: 400,
              paddingBottom: "60px",
              paddingLeft: "400px",
            }}
          >
            {dependents &&
              dependents?.map((dependent) => (
                <Grid item xs={6}>
                  <ListItem justifyContent="center">
                    <DependentCard dependent={dependent} />
                  </ListItem>
                </Grid>
              ))}
          </List>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default DependentsViewPage;
