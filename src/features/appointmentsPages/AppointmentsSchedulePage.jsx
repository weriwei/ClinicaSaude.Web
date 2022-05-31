import React, { useEffect, useState, useContext } from "react";
import { Context } from "@context/userContext";
import { Paper, Box } from "@material-ui/core";
import { useHistory } from "react-router";
import useStyles from "./appointmentsScheduleClasses";
import AppointmentSteper from "@components/AppointmentSteper";
import {
  getSpecialitys,
  getDoctorsBySpecialityId,
  getSchedulesByDoctorId,
  createAppointment,
} from "@hooks/useAppointments";
import { routes } from "@constants/routes";
import { getDependents } from "@hooks/useDependents";
import SpecialityList from "@components/specialityCard/SpecialityList";
import DoctorsList from "@components/doctorCard/DoctorsList";
import PatientsList from "@components/patientCard/PatientsList";
import ScheduleList from "@components/scheduleCard/ScheduleList";
import GenericModal from "@components/genericModal/GenericModal";
import {
  getModalSuccessButtons,
  getModalFailureButtons,
  modalSuccessText,
  modalFailureText,
} from "@helper/modalAppointmentsHelper";

const AppointmentsSchedulePage = () => {
  const { getUserId, userData } = useContext(Context);
  const history = useHistory();
  const classes = useStyles();
  const [specialitys, setSpecialitys] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [patients, setPatients] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState([]);
  const [selectedPatientId, setSelectedPatientId] = useState();
  const [step, setStep] = useState(0);
  const [modalError, setModalError] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  const goHome = () => {
    setModalSuccess(false);
    history.push(routes.home.path);
  };
  const goView = () => {
    setModalSuccess(false);
    history.push(routes.appointments.view);
  };

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
    }
    setStep(step + 1);
  };

  const handleSelectPatient = async (id) => {
    const response = await getSchedulesByDoctorId(selectedDoctorId);

    setSelectedPatientId(id);

    if (response.data.length !== 0) {
      setSchedules(response.data);
      setStep(step + 1);
    } else setStep(step);
  };

  const handleSelectSchedule = async (idSchedule) => {
    const response = await createAppointment(idSchedule, selectedPatientId);

    if (response) setModalSuccess(response);
    else setModalError(!response);
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

  const handleModalError = () => {
    setModalError(false);
    setStep(0);
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
        <PatientsList
          patients={getPatients()}
          onSelectPatient={handleSelectPatient}
        />
      );
    } else if (step === 3) {
      return (
        <ScheduleList
          schedules={schedules}
          onSelectSchedule={handleSelectSchedule}
        />
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
        <GenericModal
          open={modalError || modalSuccess}
          onClose={modalError ? setModalError : setModalSuccess}
          title={modalError ? modalFailureText.title : modalSuccessText.title}
          buttons={
            modalError
              ? getModalFailureButtons(handleModalError)
              : getModalSuccessButtons(goView, goHome)
          }
          type={modalError ? modalFailureText.type : modalSuccessText.type}
        />
      </Box>
    </>
  );
};

export default AppointmentsSchedulePage;
