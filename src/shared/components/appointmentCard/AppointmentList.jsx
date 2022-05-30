import React from "react";
import { Grid } from "@material-ui/core";
import AppointmentCard from "@components/appointmentCard/AppointmentCard";

const AppointmentList = ({ appointments }) => {
  return (
    <Grid container item xs={9} spacing={4}>
      {appointments &&
        appointments?.map((appointment) => (
          <Grid item xs={4} key={appointment.id}>
            <AppointmentCard appointment={appointment} />
          </Grid>
        ))}
    </Grid>
  );
};

export default AppointmentList;
