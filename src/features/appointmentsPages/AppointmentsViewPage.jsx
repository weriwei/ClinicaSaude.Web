import React, { useState, useContext, useEffect } from "react";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { Context } from "@context/userContext";
import useStyles from "./appointmentViewClasses";
import { getDependents } from "@hooks/useDependents";
import PatientsSelect from "@components/PatientsSelect";
import { getAppointmentsByPatientId } from "@hooks/useAppointments";
import AppointmentList from "@components/appointmentCard/AppointmentList";

const AppointmentsViewPage = () => {
  const { getUserId, userData } = useContext(Context);
  const classes = useStyles();
  const [selectedPatient, setSelectedPatient] = useState(getUserId());
  const [appointments, setAppointments] = useState();
  const [patients, setPatients] = useState();

  useEffect(() => {
    const handleDependents = async () => {
      setTimeout(500);
      const id = getUserId();
      const response = await getDependents(id);

      if (response.data.length !== 0) setPatients(response.data);
    };
    handleDependents();
  }, []);

  useEffect(() => {
    const handleGetAppointments = async () => {
      const response = await getAppointmentsByPatientId(selectedPatient);

      setAppointments(response.data);
    };

    handleGetAppointments();
  }, [selectedPatient]);

  const getPatients = () => {
    let listPatients = [];
    listPatients.push({ nome: userData.name, id: userData.id });

    patients?.forEach((patient) => {
      listPatients.push({ nome: patient.nome, id: patient.id });
    });
    return listPatients;
  };

  return (
    <>
      <Box className={classes.container}>
        <Paper className={classes.box} elevation={12}>
          <Grid container direction="row" spacing={2}>
            <Grid
              container
              item
              xs={6}
              justifyContent="flex-start"
              style={{ paddingLeft: "30px", paddingTop: "20px" }}
            >
              <Typography className={classes.text}>Paciente:</Typography>
              <Grid item xs={6} style={{ paddingLeft: "10px" }}>
                <PatientsSelect
                  setSelectedPatient={setSelectedPatient}
                  patientes={getPatients()}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ paddingLeft: "70px" }}>
              {appointments && <AppointmentList appointments={appointments} />}
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default AppointmentsViewPage;
