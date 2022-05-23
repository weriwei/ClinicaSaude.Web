import React from "react";
import { Grid } from "@material-ui/core";
import PatientCard from "./PatientCard";

const PatientsList = ({ patients = [], onSelectPatient }) => {
  return (
    <Grid container item xs={12} spacing={10}>
      {patients &&
        patients?.map((patient) => (
          <Grid item xs={6} key={patient.id}>
            <PatientCard
              patient={patient.nome}
              onClick={() => onSelectPatient(patient.id)}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default PatientsList;
