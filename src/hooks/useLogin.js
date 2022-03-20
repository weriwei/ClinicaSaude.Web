import healthClinicRequestManager from "../healthClinicRequestManager";

export const requestLogin = async (userData) => {
  const response = await healthClinicRequestManager.userLogin(userData);

  return response;
};
