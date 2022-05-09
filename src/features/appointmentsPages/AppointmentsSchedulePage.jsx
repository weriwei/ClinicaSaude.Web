import { Grid, Paper, Box } from "@material-ui/core";
import React from "react";
import SpecialityCard from "@components/specialityCard/SpecialityCard";
import useStyles from "./appointmentsScheduleClasses";
import { specialitys } from "@constants/data";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const AppointmentsSchedulePage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Paper className={classes.box} elevation={12}>
        <Grid container direction="row" spacing={2}>
          <List
            style={{
              maxHeight: "80vh",
              overflow: "auto",
              width: "100%",
              height: 500,
            }}
          >
            {specialitys &&
              specialitys?.map((speciality) => (
                <Grid item xs={5}>
                  <ListItem>
                    <SpecialityCard
                      tittle={speciality.tittle}
                      description={speciality.description}
                    />
                  </ListItem>
                </Grid>
              ))}
          </List>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AppointmentsSchedulePage;
