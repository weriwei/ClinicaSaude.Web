import React, { useEffect, useState, useContext } from "react";
import { Context } from "@context/userContext";
import { Paper, Box } from "@material-ui/core";
import useStyles from "./appointmentsScheduleClasses";
import AppointmentSteper from "@components/AppointmentSteper";
import {
  getSpecialitys,
  getDoctorsBySpecialityId,
  getSchedulesByDoctorId,
} from "@hooks/useAppointments";
import { getDependents } from "@hooks/useDependents";
import SpecialityList from "@components/specialityCard/SpecialityList";
import DoctorsList from "@components/doctorCard/DoctorsList";
import PatientsList from "@components/patientCard/PatientsList";

const AppointmentsSchedulePage = () => {
  const { getUserId, userData } = useContext(Context);
  const classes = useStyles();
  const [specialitys, setSpecialitys] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [patients, setPatients] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState([]);
  const [step, setStep] = useState(0);

  const handleSelectSpeciality = async (id) => {
    const response = await getDoctorsBySpecialityId(id);
    if (response.data !== []) {
      setDoctors(response.data);
      setStep(step + 1);
    } else setStep(step - 1);
  };

  const handleSelectDoctor = async (id) => {
    const response = await getDependents(getUserId());

    setSelectedDoctorId(id);

    if (response.data.length !== 0) {
      setPatients(response.data);
      setStep(step + 1);
    } else setStep(step);
  };

  const getPatients = () => {
    let listPatients = [];
    listPatients.push({ nome: userData.name, id: userData.id });

    patients.forEach((patient) => {
      listPatients.push({ nome: patient.nome, id: patient.id });
    });
    return listPatients;
  };

  const handleStepClick = () => {
    if (step === 0) return;
    else setStep(step - 1);
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
      return (
        <DoctorsList doctors={doctors} onSelectDoctor={handleSelectDoctor} />
      );
    } else if (step === 2) {
      return (
        <PatientsList patients={getPatients()} onSelectPatient={() => ""} />
      );
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
      <AppointmentSteper step={step} onClick={handleStepClick} />
      <Box className={classes.container}>
        <Paper className={classes.box} elevation={12}>
          {getStepContent()}
        </Paper>
      </Box>
    </>
  );
};

export default AppointmentsSchedulePage;
