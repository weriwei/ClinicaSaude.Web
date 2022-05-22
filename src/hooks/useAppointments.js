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
