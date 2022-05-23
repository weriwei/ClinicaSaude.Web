import React from "react";
import DoctorCard from "./DoctorCard";
import { Grid } from "@material-ui/core";

const DoctorsList = ({ doctors = [], onSelectDoctor }) => {
  return (
    <Grid container item xs={12} spacing={10} justifyContent="center">
      {doctors &&
        doctors?.map((doctor) => (
          <Grid item xs={8} key={doctor.id}>
            <DoctorCard
              name={doctor.name}
              speciality={doctor.speciality_Name}
              onClick={() => onSelectDoctor(doctor.id)}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default DoctorsList;
