import { Paper, Box, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./appointmentsScheduleClasses";
import AppointmentSteper from "@components/AppointmentSteper";
import SpecialityList from "@components/specialityCard/SpecialityList";
import {
  getSpecialitys,
  getDoctorsBySpecialityId,
} from "@hooks/useAppointments";

const AppointmentsSchedulePage = () => {
  const classes = useStyles();
  const [specialitys, setSpecialitys] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [step, setStep] = useState(0);

  const handleSelectSpeciality = async (id) => {
    const response = await getDoctorsBySpecialityId(id);
    if (response.data !== []) {
      setDoctors(response.data);
      setStep(1);
    } else setStep(0);
  };

  const getStepContent = () => {
    if (step === 0) {
      return (
        <SpecialityList
          specialitys={specialitys}
          onSelectSpeciality={handleSelectSpeciality}
        />
      );
    } else if (step === 1) {
      return <Button>Weren Ricardo</Button>;
    }
  };

  useEffect(() => {
    const fetchSpecialitys = async () => {
      const response = await getSpecialitys();
      if (response) setSpecialitys(response.data);
    };
    fetchSpecialitys();
  }, []);

  return (
    <>
      <AppointmentSteper step={step} />
      <Box className={classes.container}>
        <Paper className={classes.box} elevation={12}>
          {getStepContent()}
        </Paper>
      </Box>
    </>
  );
};

export default AppointmentsSchedulePage;
