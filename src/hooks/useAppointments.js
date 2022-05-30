import healthClinicRequestManager from "../healthClinicRequestManager";

export const getSpecialitys = async () => {
  const response = await healthClinicRequestManager.getSpecialitys();

  return response;
};

export const getDoctorsBySpecialityId = async (id) => {
  const response = await healthClinicRequestManager.getDoctorsBySpecialityId(
    id
  );

  return response;
};

export const getSchedulesByDoctorId = async (id) => {
  const response = await healthClinicRequestManager.getSchedulesByDoctorId(id);

  return response;
};

export const createAppointment = async (idSchedule, idPatient) => {
  const response = await healthClinicRequestManager.createAppointment(
    idSchedule,
    idPatient
  );

  return response;
};

export const getAppointmentsByPatientId = async (idPatient) => {
  const response = await healthClinicRequestManager.getAppointmentsByPatientId(
    idPatient
  );

  return response;
};
